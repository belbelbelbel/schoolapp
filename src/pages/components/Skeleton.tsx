import "../Styles/Skeleton.css"
export const Skeleton = () => {
    return (
        <div className="skeleton-wrapper">
            <div className="skeleton-header">
                <div className="skeleton-avatar"></div>
                <div className="skeleton-lines">
                    <div className="skeleton-line"></div>
                    <div className="skeleton-line short"></div>
                </div>
            </div>
            <div className="skeleton-content">
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
                <div className="skeleton-line"></div>
            </div>
        </div>
    )
}
