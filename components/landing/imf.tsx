"use client";
import { useState } from "react";

export default function IMF() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    source_label: "",
    title: "",
    content: "",
    source_url: "",
    metadata: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      source_label: formData.source_label,
      documents: [
        {
          title: formData.title,
          content: formData.content,
          source_url: formData.source_url || "",
          source_type: "other",
          country: "BJ",
          published_at: new Date().toISOString(),
          metadata: formData.metadata || "",
          status: "published",
        },
      ],
    };

    try {
      // Envoie vers l'API interne Next.js
      const res = await fetch("/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erreur");

      alert("✅ Offre envoyée sur le serveur distant !");
      setFormData({
        source_label: "",
        title: "",
        content: "",
        source_url: "",
        metadata: "",
      });
    } catch (err) {
      console.error(err);
      alert("❌ Erreur lors de l'envoi !");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center sm:px-6 lg:px-8 bg-secondary p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-lg space-y-4"
      >
        <h1 className="text-xl font-bold text-center">Publier une offre IMF</h1>

        <input
          name="source_label"
          placeholder="Nom de la source"
          value={formData.source_label}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="title"
          placeholder="Titre de l’offre"
          value={formData.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <textarea
          name="content"
          placeholder="Description complète (tous les détails)"
          value={formData.content}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          rows={6}
          required
        />

        <input
          name="source_url"
          placeholder="URL source (facultatif)"
          value={formData.source_url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          name="metadata"
          placeholder="Métadonnées (facultatif)"
          value={formData.metadata}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded bg-foreground"
        >
          {loading ? "Envoi..." : "Publier"}
        </button>
      </form>
    </div>
  );
}