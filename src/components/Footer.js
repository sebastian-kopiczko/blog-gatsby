import React from "react"
import SocialIcons from "./SocialIcons"
import Navigation from "./Navigation"

const Footer = () => {
  const featuredPosts = [{}, {}]

  return (
    <footer>
      <div>
        <div>
          <h4>about us</h4>
          <img alt="post image" src="https://via.placeholder.com/350x230" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            reiciendis at placeat atque pariatur vitae aliquid ea quidem.
          </p>
        </div>
        <div>
          <h4>latest post</h4>
        </div>
        <div>
          <div>
            <h4>quick links</h4>
            <Navigation />
          </div>
          <div>
            <h4>social</h4>
            <SocialIcons />
          </div>
        </div>
      </div>
      <p>
        Copyright &copy; 2019 Sebastian Kopiczko | Template design by{" "}
        <a href="https://colorlib.com/wp/template/wordify/">Colorlib</a>
      </p>
    </footer>
  )
}
export default Footer
