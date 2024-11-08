import { useState } from "react";
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
} from "react-admin";

export const PicturesEdit = (props: EditProps) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const notify = useNotify();

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mr31295");

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

      setImageURL(uploadedImageUrl);
      notify("Image téléchargée avec succès !", { type: "success" });
    } catch (error) {
      notify("Erreur lors du téléchargement de l'image", { type: "warning" });
    }
  };

  return (
    <Edit {...props} redirect="list">
      <SimpleForm>
        <TextInput source="title" label="Titre" />
        <ImageField source="url" title="Photo" />
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <TextInput
          source="url"
          label="Lien de la photo"
          defaultValue={imageURL}
        />

        {imageURL && (
          <img
            src={imageURL}
            alt="Prévisualisation de la photo"
            style={{ width: 200, height: "auto" }}
          />
        )}

        <ReferenceInput source="event_id" reference="events" label="Evenement">
          <SelectInput optionText="event" validate={[required()]} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
