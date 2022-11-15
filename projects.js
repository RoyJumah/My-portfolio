"use strict";

export const projects = [
  {
    name: "Topic",
    feature: "CANOPY",
    background: "Back End Dev",
    year: "2015",
    image: "project6.png",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/My-portfolio",
    linkSource: "https://github.com/RoyJumah/My-portfolio",
  },

  {
    name: "Multi-Post Stories",
    feature: "FACEBOOK",
    background: "Full Stack Dev",
    year: "2015",
    image: "project2.png",
    description:
      "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
    tool1: "html",
    tool2: "css",
    tool3: "javascript",
    linkLive: "https://royjumah.github.io/My-portfolio",
    linkSource: "https://github.com/RoyJumah/My-portfolio",
  },

  {
    name: "Facebook 360",
    feature: "FACEBOOK",
    background: "Full Stack Dev",
    year: "2015",
    image: "project3.png",
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
    image: "project4.png",
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

export function createModal() {
  startingPoint.insertAdjacentHTML(
    "afterend",
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name fw-700 fz-32 lh-44 clr-n-800'></h2>
    <button class="closeModal">&times;</button>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature fw-600 fz-13 lh-16 clr-n-600"></p>
    <ul class=" flex">
    <li class=" project-background fw-600 fz-13 lh-16 clr-n-500"></li>
    <li class="project-year fw-600 fz-13 lh-16 clr-n-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description fw-400 fz-15 lh-24 clr-n-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool2 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool3 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
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
