import Authenticated from "@/Layouts/Authenticated/Index";
import ValidationErrors from "@/Components/ValidationErrors";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, useForm } from "@inertiajs/react";
import { Input } from "postcss";

export default function Create({ auth }) {
    const { setData, post, processing, errors } = useForm({
        name: "",
        category: "",
        video_url: "",
        thumbnail: "",
        rating: "",
        is_featured: false,
    });

    const handleOnChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("admin.dashboard.movie.store"));
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Create Movie" />
            <h1 className="text-xl">Insert New Movie</h1>
            <hr className="mb-4" />
            <ValidationErrors errors={errors} />
            <form onSubmit={submit}>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                    name="name"
                    type="text"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the name of the movie"
                    isErrors={errors.name}
                />
                <InputLabel
                    forInput="category"
                    value="Category"
                    className="mt-4"
                />
                <TextInput
                    name="category"
                    type="text"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the category of the movie"
                    isErrors={errors.category}
                />
                <InputLabel
                    forInput="video_url"
                    value="Video URL"
                    className="mt-4"
                />
                <TextInput
                    name="video_url"
                    type="url"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the URL of the movie"
                    isErrors={errors.video_url}
                />
                <InputLabel
                    forInput="thumbnail"
                    value="Thumbnail"
                    className="mt-4"
                />
                <TextInput
                    name="thumbnail"
                    type="file"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Insert the thumbnail of the movie"
                    isErrors={errors.thumbnail}
                />
                <InputLabel forInput="rating" value="Rating" className="mt-4" />
                <TextInput
                    name="rating"
                    type="number"
                    variant="primary-outline"
                    handleChange={handleOnChange}
                    placeholder="Enter the rating of the movie"
                    isErrors={errors.rating}
                />
                <div className="flex flex-row mt-4 items-center">
                    <InputLabel
                        forInput="is_featured"
                        value="Is Featured"
                        className="mt-1 mr-3"
                    />
                    <Checkbox
                        name="is_featured"
                        handleChange={(e) =>
                            setData("is_featured", e.target.checked)
                        }
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="mt-4"
                    processing={processing}
                >
                    Save
                </PrimaryButton>
            </form>
        </Authenticated>
    );
}
