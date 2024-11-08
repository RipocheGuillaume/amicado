import { Cloudinary } from "@cloudinary/url-gen";
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

export const SongCreate = (props: CreateProps) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const cld = new Cloudinary({
    cloud: {
      cloudName: "deihndpsd",
    },
  });

  const notify = useNotify(); // Hook pour afficher des notifications

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mr31295"); // Remplacez par le nom correct de votre preset

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/deihndpsd/image/upload`,
        {
          method: "POST",
          body: formData,
        },
      );
      const data = await response.json();
      const uploadedImageUrl = data.secure_url;

      setImageURL(uploadedImageUrl); // Mise à jour pour l'aperçu et champ image

      // Notification de succès
      notify("Image téléchargée avec succès !", { type: "success" });
    } catch (error) {
      notify("Erreur lors du téléchargement de l'image", { type: "warning" });
    }
  };

  return (
    <Create {...props} redirect={"/Song"}>
      <SimpleForm>
        <TextInput source="title" label="Titre" validate={[required()]} />
        <TextInput source="author" label="Auteur" validate={[required()]} />

        {/* Champ personnalisé de téléchargement d'image */}
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {/* Champ image qui stocke l'URL */}
        <TextInput
          source="image"
          label="Image URL"
          defaultValue={imageURL}
          disabled
        />

        {/* Prévisualisation de l'image si l'URL est définie */}
        {imageURL && (
          <img
            src={imageURL}
            alt="Image Preview"
            style={{ width: 200, height: "auto" }}
          />
        )}

        <ReferenceInput source="years_id" reference="years" label="Année">
          <SelectInput optionText="year" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
