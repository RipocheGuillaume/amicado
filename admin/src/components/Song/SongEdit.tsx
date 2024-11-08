import { useEffect, useState } from "react";
import {
  Edit,
  EditProps,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
  useNotify,
  ImageField,
  useEditContext,
} from "react-admin";

export const SongEdit = (props: EditProps) => {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const notify = useNotify(); // Hook pour afficher des notifications

  const { record, isPending, setValue } = useEditContext();
  if (isPending) return null;

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

  useEffect(() => {
    if (imageURL) {
      // Mettre à jour la valeur du champ image avec l'URL téléchargée
      const imageInputElement = document.querySelector<HTMLInputElement>(
        "input[name='image']",
      );
      if (imageInputElement) {
        imageInputElement.value = imageURL;
      }
    }
  }, [imageURL]);

  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="title" label="Titre" />
        <TextInput source="author" label="Auteur" />
        {/* Champ personnalisé de téléchargement d'image */}

        <ImageField source="image" title="title" />

        <input type="file" accept="image/*" onChange={handleImageUpload} />

        {/* Champ image qui stocke l'URL */}
        <TextInput
          source="image"
          label="Image URL"
          defaultValue={record.image}
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
    </Edit>
  );
};
