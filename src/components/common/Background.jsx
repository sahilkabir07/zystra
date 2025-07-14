const BackgroundVideo = () => {
    return (
        <>
            <video
                className="fixed top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                src="https://www.pexels.com/download/video/3129595/"
            />
            <div className="fixed top-0 left-0 w-full h-full bg-black/60 z-0" />
        </>
    );
};

export default BackgroundVideo;
