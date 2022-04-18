import "./ProfileCard.css";

export const ProfileCard = ({user}) => {
    return (
        <section className="profile-card">
            <div className="profile-card__avatar">
                <img src={user.avatar_url} className="profile-card__image" alt="" />
                <div className="profile-card__info">
                    <h3 className="profile-card__name">{user.login}</h3>
                    <span className="profile-card__username">@{user.login}</span>
                    <p className="profile-card__date">{user.created_at}</p>
                </div>
            </div>
            <p className="profile-card__description">
                This is a description
            </p>

            <div className="profile-card__stats">
                <div className="profile-card__stat">
                    <span className="title">Repos</span>
                    <span className="profile-card__value">8</span>
                </div>
                <div className="profile-card__stat">
                    <span className="title">Followers</span>
                    <span className="profile-card__value">3938</span>
                </div>
                <div className="profile-card__stat">
                    <span className="title">Following</span>
                    <span className="profile-card__value">9</span>
                </div>
            </div>

            <div className="profile-card__links">
                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-location.svg" alt="" />
                    <span>San Francisco</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-website.svg" alt="" />
                    <span>http://github.com</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-twitter.svg" alt="" />
                    <span>Not Avalible</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-company.svg" alt="" />
                    <span>@github</span>
                </a>
            </div>
        </section>

    )
}