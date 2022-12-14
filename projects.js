const projects = [
  {
    name: "Coachella Concert Showcase",
    feature: "Coachella Concert",
    background: "Front End Dev",
    year: "2022",
    image: "./images/coachella-snapshot.png",
    description:
      "The Coachella Concert Showcase is a simple project aimed to represent an annual concert in America. It has only two pages, the home page and the about page.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/Coachella-Capstone-project/",
    linkSource: "https://github.com/RoyJumah/Coachella-Capstone-project",
  },

  {
    name: "Awesome Books List",
    feature: "Awesome Books",
    background: "Front End Dev",
    year: "2022",
    image: "./images/awesome-books.png",
    description:
      "This is a project created using HTML, CSS and Javascript that enables a user to add and remove a book from a list",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/Awesome-Books-ES6/#",
    linkSource: "https://github.com/RoyJumah/Awesome-Books-ES6",
  },

  {
    name: "Facebook 360",
    feature: "FACEBOOK",
    background: "Full Stack Dev",
    year: "2015",
    image: "./images/project3.png",
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/My-portfolio",
    linkSource: "https://github.com/RoyJumah/My-portfolio",
  },
  {
    name: "Uber Navigation",
    feature: "Uber",
    background: "Lead Developer",
    year: "2018",
    image: "./images/project4.png",
    description:
      "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/My-portfolio/",
    linkSource: "https://github.com/RoyJumah/My-portfolio",
  },
];

const startingPoint = document.querySelector("main");

function createModal() {
  startingPoint.insertAdjacentHTML(
    "afterend",
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal-header'>
    <h2 class='project-name title'></h2>
    <button class="closeModal">&times;</button>
    </div>
    <ul class='modal__feature portfolio-list'>
    <li class="project-feature name"></li>
    <li class=" project-background"></li>
    <li class="project-year"> </li>
    </ul>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <div class='modal__dsc '>
    <p class='modal__dsc__first'><p class='project-description portfolio-info fw-400 fz-15 lh-24 clr-n-600'></p></p>
  <div>
    <ul class='languages-list margin-top'>
    <li class="project-tool1"></li>
    <li class="project-tool2"></li>
    <li class="project-tool3"></li>
    </ul>
    <div class=" btn-wrapper margin-top">
    <a href='' class="btn link project-linkLive">See Live</a>
    <a href='' class="btn link project-linkSource">See Source</a>
    </div>
    </div>
    </div>
    </section>
    </div>`
  );
}

// Event that detects when the page loads
document.addEventListener("DOMContentLoaded", () => {
  createModal();

  const buttonsProject = document.querySelectorAll("button");
  const closeIcon = document.querySelector(".closeModal");
  const modal = document.querySelector(".modal");
  const backgroundModal = document.querySelector(".overlay");
  const projectName = document.querySelector(".project-name");
  const projectFeature = document.querySelector(".project-feature");
  const projectBack = document.querySelector(".project-background");
  const projectYear = document.querySelector(".project-year");
  const projectImage = document.querySelector(".project-image");
  const projectDescription = document.querySelector(".project-description");
  const projectTool1 = document.querySelector(".project-tool1");
  const projectTool2 = document.querySelector(".project-tool2");
  const projectTool3 = document.querySelector(".project-tool3");
  const projectLinkLive = document.querySelector(".project-linkLive");
  const projectLinkSource = document.querySelector(".project-linkSource");

  const closeModal = () => {
    modal.classList.remove("active");
    backgroundModal.classList.remove("active");
  };

  buttonsProject.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.id === "0") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "1") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "2") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      } else if (button.id === "3") {
        projectName.textContent = `${projects[button.id].name}`;
        projectFeature.textContent = `${projects[button.id].feature}`;
        projectBack.textContent = `${projects[button.id].background}`;
        projectYear.textContent = `${projects[button.id].year}`;
        projectImage.setAttribute("src", `${projects[button.id].image}`);
        projectDescription.textContent = `${projects[button.id].description}`;
        projectTool1.textContent = `${projects[button.id].tool1}`;
        projectTool2.textContent = `${projects[button.id].tool2}`;
        projectTool3.textContent = `${projects[button.id].tool3}`;
        projectLinkLive.setAttribute("href", `${projects[button.id].linkLive}`);
        projectLinkSource.setAttribute(
          "href",
          `${projects[button.id].linkSource}`
        );
        modal.classList.add("active");
        backgroundModal.classList.add("active");
      }
    });
  });

  closeIcon.addEventListener("click", closeModal);
});
