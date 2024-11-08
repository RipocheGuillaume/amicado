import { useState } from "react";
import {
  Create,
  CreateProps,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useNotify,
} from "react-admin";

export const VoiceCreate = (props: CreateProps) => {
  const [audioURL, setAudioURL] = useState<string | null>(null);

  const notify = useNotify(); // Pour afficher les notifications

  const handleAudioUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mr31295"); // Remplacez par le nom de votre preset audio Cloudinary

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/deihndpsd/video/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.log("Erreur lors du téléchargement : ", errorText);
        throw new Error(`Erreur Cloudinary: ${errorText}`);
      }
      const data = await response.json();
      const uploadedAudioUrl = data.secure_url;

      setAudioURL(uploadedAudioUrl); // Mise à jour pour l'aperçu et champ audio_url

      notify("Audio téléchargé avec succès !", { type: "success" });
    } catch (error) {
      notify("Erreur lors du téléchargement de l'audio", { type: "warning" });
    }
  };
  return (
    <Create {...props} redirect={"/voice"}>
      <SimpleForm>
        <TextInput source="voice" label="Voix" />
        {/* Champ personnalisé de téléchargement audio */}
        <input type="file" accept="audio/*" onChange={handleAudioUpload} />

        {/* Champ audio_url qui stocke l'URL du fichier audio */}
        <TextInput
          source="link"
          label="Audio URL"
          defaultValue={audioURL}
          disabled
        />

        {/* Prévisualisation de l'audio si l'URL est définie */}
        {audioURL && (
          <audio controls src={audioURL}>
            Your browser does not support the audio element.
          </audio>
        )}
        <ReferenceInput source="song_id" reference="song" label="Chanson">
          <SelectInput optionText="title" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
