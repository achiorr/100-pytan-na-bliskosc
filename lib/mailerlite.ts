interface SubscribeOptions {
  email: string;
  name?: string;
}

export async function addSubscriberToMailerLite({ email, name }: SubscribeOptions) {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const groupId = process.env.MAILERLITE_GROUP_ID;

  // W trybie deweloperskim, jeśli brak klucza API, symulujemy sukces z logiem
  if (!apiKey || apiKey === "twoj_klucz_api_z_mailerlite") {
    console.warn(
      "[MailerLite] Brak skonfigurowanego MAILERLITE_API_KEY w .env.local. Symulacja zapisu:",
      { email, name, groupId }
    );
    return {
      success: true,
      simulated: true,
      message: "Zapis symulowany (uzupełnij MAILERLITE_API_KEY w .env.local)",
    };
  }

  const payload: Record<string, any> = {
    email: email.trim().toLowerCase(),
    status: "active",
  };

  if (name && name.trim()) {
    payload.fields = {
      name: name.trim(),
    };
  }

  if (groupId && groupId.trim() && groupId !== "twoj_id_grupy") {
    payload.groups = [groupId.trim()];
  }

  const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${apiKey.trim()}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    const errorMessage =
      data?.message || data?.errors?.email?.[0] || "Nie udało się zapisać do bazy MailerLite.";
    throw new Error(errorMessage);
  }

  return {
    success: true,
    data,
  };
}
