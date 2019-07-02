import React from "react"

const IndexPage = () => {
  const navItems = [
    "Home",
    "Business",
    "Travel",
    "Categories",
    "About",
    "Contact",
  ]
  const tags = [
    "Travel",
    "Adventure",
    "Food",
    "Lifestyle",
    "Business",
    "Freelancing",
  ]
  const socialItems = ["Twitter", "Facebook", "Instagram", "Youtube", "Vimeo"]
  return (
    <div>
      <header>
        <div>
          <div>
            {socialItems.map((socialItem, index) => (
              <img
                style={{ marginRight: "10px" }}
                key={index}
                src="https://via.placeholder.com/15x15"
              />
            ))}
          </div>
          <div>
            <input type="search" name="" id="" />
            searchbar
          </div>
        </div>
        <h1>Surfify</h1>
        <nav>
          <ul>
            {navItems.map((navItem, index) => (
              <li key={index}>{navItem}</li>
            ))}
          </ul>
        </nav>
      </header>
      <div>
        <div>post category</div>
        <div>
          <span>post author</span>
          <span>post date</span>
          <span>post comments</span>
        </div>
        <div>
          <h2>post title</h2>
          <p>post excerpt</p>
        </div>

        <div>* * *</div>
      </div>
      <div>
        <h3>Latest Posts</h3>
        <div>
          <div>
            <img alt="post image" src="https://via.placeholder.com/330x220" />
            <div>
              <div>
                <span>post author</span>
                <span>post date</span>
                <span>post comments</span>
              </div>
              <h2>post title</h2>
            </div>
          </div>
          <div>
            <img alt="post image" src="https://via.placeholder.com/330x220" />
            <div>
              <div>
                <span>post author</span>
                <span>post date</span>
                <span>post comments</span>
              </div>
              <h2>post title</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <input type="search" name="" id="" />
        searchbar
      </div>
      <div>
        <h3>David Craig</h3>
        <p>author description</p>
        <button>Read my bio</button>
        <div>
          {socialItems.map((socialItem, index) => (
            <span key={index}>{socialItem} </span>
          ))}
        </div>
        <div>
          <h4>popular posts</h4>
          <ul>
            <li>
              <img alt="post image" src="https://via.placeholder.com/90x60" />
              <div>
                <h3>How to find the Blog Post Title</h3>
                <p>Jul 2, 11:29PM</p>
              </div>
            </li>
            <li>
              <img alt="post image" src="https://via.placeholder.com/90x60" />
              <div>
                <h3>How to find the Blog Post Title</h3>
                <p>Jul 2, 11:29PM</p>
              </div>
            </li>
          </ul>
          <div>
            <div></div>
          </div>
        </div>
        <div>
          <h4>Categories</h4>
          <ul>
            <li>Food</li>
            <li>Travel</li>
            <li>Lifestyle</li>
            <li>Business</li>
            <li>Adventure</li>
          </ul>
        </div>
        <div>
          <h4>Tags</h4>
          <hr />
          <div>
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <footer>
          <div>
            <div>
              <h4>about us</h4>
              <img alt="post image" src="https://via.placeholder.com/350x230" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quaerat reiciendis at placeat atque pariatur vitae aliquid ea
                quidem.
              </p>
            </div>
            <div>
              <h4>latest post</h4>
              <ul>
                <li>
                  <img
                    alt="post image"
                    src="https://via.placeholder.com/90x60"
                  />
                  <div>
                    <h3>How to find the Blog Post Title</h3>
                    <p>Jul 2, 11:29PM</p>
                  </div>
                </li>
                <li>
                  <img
                    alt="post image"
                    src="https://via.placeholder.com/90x60"
                  />
                  <div>
                    <h3>How to find the Blog Post Title</h3>
                    <p>Jul 2, 11:29PM</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h4>quick links</h4>
                <nav>
                  <ul>
                    {navItems.map((navItem, index) => (
                      <li key={index}>{navItem}</li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div>
                <h4>social</h4>
                <nav>
                  <ul>
                    {socialItems.map((socialItem, index) => (
                      <li key={index}>{socialItem}</li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <p>
            Copyright &copy; 2019 Sebastian Kopiczko | Template design by{" "}
            <a href="https://colorlib.com/wp/template/wordify/">Colorlib</a>
          </p>
        </footer>
      </div>
    </div>
  )
}
export default IndexPage
