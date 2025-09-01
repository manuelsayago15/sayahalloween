const ProgressBar = ({ progress }) => {
    console.log(progress)
    return (
        <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%`}}></div>
        </div>
    )
}

export default ProgressBar