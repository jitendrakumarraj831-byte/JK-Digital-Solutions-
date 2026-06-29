import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  phone: string;
  businessType: string;
  message: string;
}

function validateForm(data: ContactFormData): string | null {
  if (!data.name || data.name.trim().length < 2) {
    return "कृपया अपना पूरा नाम दर्ज करें।";
  }
  if (!data.phone || !/^[6-9]\d{9}$/.test(data.phone.replace(/\s/g, ""))) {
    return "कृपया एक valid 10-अंकीय मोबाइल नंबर दर्ज करें।";
  }
  if (!data.businessType || data.businessType.trim().length < 2) {
    return "कृपया अपने बिजनेस का प्रकार बताएं।";
  }
  if (!data.message || data.message.trim().length < 10) {
    return "कृपया कम से कम 10 characters का संदेश लिखें।";
  }
  return null;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, businessType, message } = body as ContactFormData;

    const validationError = validateForm({ name, phone, businessType, message });
    if (validationError) {
      return NextResponse.json(
        { success: false, error: validationError },
        { status: 400 }
      );
    }

    const lead = {
      id: `LEAD-${Date.now()}`,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      phone: phone.trim(),
      businessType: businessType.trim(),
      message: message.trim(),
      source: "Website Contact Form",
    };

    console.log("📥 New Lead Received:", JSON.stringify(lead, null, 2));

    return NextResponse.json(
      {
        success: true,
        message: "आपका संदेश मिल गया! हम जल्द ही आपसे संपर्क करेंगे। 🎉",
        leadId: lead.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "सर्वर में कुछ गड़बड़ी हुई। कृपया दोबारा कोशिश करें।",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "JK Digital Solutions Contact API - Use POST to submit a lead." },
    { status: 200 }
  );
}
