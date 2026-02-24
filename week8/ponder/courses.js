const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  logo: "images/js-logo.png",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],

  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
      setMessage(`Enrolled student in section ${sectionNum}`, true);
    } else {
      setMessage(`Section ${sectionNum} not found`, false);
    }
  },

  addSection: function (sectionNum, roomNum, days, instructor) {
    sectionNum = Number(sectionNum);

    if (!sectionNum || !roomNum || !days || !instructor) {
      setMessage("Fill out all fields to add a section.", false);
      return;
    }

    const exists = this.sections.some((s) => s.sectionNum === sectionNum);
    if (exists) {
      setMessage(`Section ${sectionNum} already exists.`, false);
      return;
    }

    const newSection = {
      sectionNum: sectionNum,
      roomNum: roomNum,
      enrolled: 0,
      days: days,
      instructor: instructor
    };

    this.sections.push(newSection);
    renderSections(this.sections);
    setMessage(`Added section ${sectionNum}`, true);
  }
};

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
  </tr>`;
}

function renderSections(sections) {
  const html = sections.map(sectionTemplate);
  document.querySelector("#sections").innerHTML = html.join("");
}

function setMessage(text, ok) {
  const msg = document.querySelector("#message");
  msg.textContent = text;
  msg.style.color = ok ? "green" : "red";
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

document.querySelector("#addSectionBtn").addEventListener("click", function () {
  const sectionNum = document.querySelector("#newSectionNum").value;
  const roomNum = document.querySelector("#newRoomNum").value;
  const days = document.querySelector("#newDays").value;
  const instructor = document.querySelector("#newInstructor").value;

  aCourse.addSection(sectionNum, roomNum, days, instructor);

  document.querySelector("#newSectionNum").value = "";
  document.querySelector("#newRoomNum").value = "";
  document.querySelector("#newDays").value = "";
  document.querySelector("#newInstructor").value = "";
});