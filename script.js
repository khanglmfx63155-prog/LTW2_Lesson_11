document.querySelector("#add").onclick = function () {
  let input = document.querySelector("#newtask input");

  if (input.value.length == 0) {
    alert("Vui lòng nhập công việc!");
  } else {
    document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span class="taskname">
                    ${input.value}
                </span>
                <button class="delete">Xóa</button>
            </div>`;

    // Xóa nội dung trong input sau khi thêm
    input.value = "";

    // TH2b: Gán sự kiện cho nút xóa
    let current_tasks = document.querySelectorAll(".delete");

    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        // Xóa task (div cha của nút xóa)
        this.parentNode.remove();
      };
    }
  }
};
