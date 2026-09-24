import { NextResponse } from "next/server";
import { addSubscriberToMailerLite } from "@/lib/mailerlite";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Podaj prawidłowy adres e-mail." },
        { status: 400 }
      );
    }

    const result = await addSubscriberToMailerLite({ email, name });

    return NextResponse.json({
      success: true,
      message: "Dziękujemy za zapis! Sprawdź swoją skrzynkę e-mail.",
      simulated: result.simulated ?? false,
    });
  } catch (error: any) {
    console.error("[API Subscribe Error]:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Wystąpił błąd podczas próby zapisu. Spróbuj ponownie za chwilę.",
      },
      { status: 500 }
    );
  }
}
