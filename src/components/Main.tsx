import { MainStyled } from "../styles/Main";
import imgTeste from "../assets/583231.png";
import imgLocation from "../assets/icon-location.svg";
import imgTwitter from "../assets/icon-twitter.svg";
import imgWebSite from "../assets/icon-website.svg";
import imgCompany from "../assets/icon-company.svg";

export default function Main () {
  
  return (
    <MainStyled>
      <section className="details">
        <div className="image-profile">
          <img src={imgTeste} alt="" aria-hidden="true" className="img"/>
        </div>
        <div className="container">
          <div className="infos">
            <div className="info">
              <h2 className="name">The octocat</h2>
              <p className="user">@octocat</p>
            </div>
            <p className="joined">Joined 25 jan 2011</p>
          </div>

          <p className="description">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
          </p>

          <div className="statistic">
            <div className="repos">
              <p>Repos
                <span className="num_repos">8</span>
              </p>
            </div>
            <div className="followers">
              <p>Followers
                <span className="num_">3938</span>
              </p>
            </div>
            <div className="following">
              <p>Following
                <span className="num_following">9</span>
              </p>
            </div>
          </div>

          <div className="about">
            <div className="location">
              <img src={imgLocation} alt="" aria-hidden="true"/>
              <p>San Francisco</p>
            </div>
            <div className="tt">
              <img src={imgTwitter} alt="" aria-hidden="true" />
              <p>Not Available</p>
            </div>
            <div className="website">
              <img src={imgWebSite} alt="" aria-hidden="true" />
              <a href="#" aria-label="go to website">https://github.blog</a>
            </div>
            <div className="company">
              <img src={imgCompany} alt="" aria-hidden="true" />
              <p>@github</p>
            </div>
          </div>
        </div>
      </section>
    </MainStyled>
  )
}