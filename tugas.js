function addTask() {
  let taskInput = document.getElementById("newTask");
  let task = taskInput.value.trim();
  if (task) {
    let li = document.createElement("li");
    li.innerHTML = `${task} <span class='actions'>
      <i class='fas fa-edit' onclick='editTask(this)'></i>
      <i class='fas fa-trash' onclick='deleteTask(this)'></i>
    </span>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }
}

document
  .getElementById("newTask")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function editTask(element) {
  let currentTask =
    element.parentElement.parentElement.firstChild.textContent.trim();

  Swal.fire({
    title: "Edit Tugas",
    input: "text",
    inputValue: currentTask,
    showCancelButton: true,
    confirmButtonText: "Simpan",
    cancelButtonText: "Batal",
    inputValidator: (value) => {
      if (!value.trim()) {
        return "Tugas tidak boleh kosong!";
      }
    },
  }).then((result) => {
    if (result.isConfirmed) {
      element.parentElement.parentElement.firstChild.textContent = result.value;
      Swal.fire("Tersimpan!", "Tugas berhasil diperbarui.", "success");
    }
  });
}

function deleteTask(element) {
  Swal.fire({
    title: "Yakin ingin menghapus?",
    text: "Tugas akan dihapus secara permanen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then((result) => {
    if (result.isConfirmed) {
      element.parentElement.parentElement.remove();
    }
  });
}
