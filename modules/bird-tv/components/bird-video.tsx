import ReactPlayer from "react-player";
import { supabase } from "../../../components/supabase/supabase";
import { useEffect, useMemo, useState } from "react";

const getVideoData = async (bucketName: string, fileName: string) => {
    const { data, error } = await supabase.storage.from(bucketName).createSignedUrl(fileName, 60);

    return !(!!error) ? data : null;
}

const BirdVideo = () => {
    const [signedUrl, setSignedUrl] = useState<string | undefined>("");
    useEffect(() => {
        let result = async () => {
            let response = await getVideoData('Bird', 'hummingbird.mp4')
            setSignedUrl(response?.signedUrl);
        }
        result();
        
    }, []);

    return (
        <div className="flex w-full justify-center p-4">
            { !(!!signedUrl) ? <div>Loading...</div> : <ReactPlayer url={signedUrl} controls={true} />}
        </div>
    )
}

export default BirdVideo;