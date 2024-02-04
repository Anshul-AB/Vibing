import { cloudinary_upload_preset } from "../../configure";
import {openUploadWidget} from "../../utils/CloudinaryService";

const CloudinaryUpload = ({setUrl, setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dfkelgtzj",
                uploadPreset: cloudinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-cyan-200 text-black rounded-sm p-2 font-semibold hover:bg-cyan-300 w-full"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;