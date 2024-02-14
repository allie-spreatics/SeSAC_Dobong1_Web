const tbody = document.querySelector("tbody");

// 방명록 등록
// POST /visitor
function createVisitor() {
  const form = document.forms["visitor-form"];
  console.log(form);

  if (form.name.value.length === 0 || form.comment.value.length === 0) {
    alert("이름과 방명록 모두를 기입해주세요!");
    return;
  }

  if (form.name.value.length > 6) {
    alert("이름은 6글자 이하");
    return;
  }

  axios({
    method: "POST",
    url: "/visitor",
    data: {
      name: form.name.value,
      comment: form.comment.value,
    },
  }).then((response) => {
    console.log(response.data); //{id, name, comment}
    const { data } = response;
    const html = `
    <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.comment}</td>
        <td>
           <button type="button" onclick="editVisitor(${data.id})">
           수정
           </button>
        </td>
        <td>
           <button
              type="button"
              onclick="deleteVisitor(this,${data.id})"
            >
              삭제
            </button>
        </td>
    </tr>
    `;

    tbody.insertAdjacentHTML("beforeend", html);
  });
}

// 방명록 삭제
// DELETE /visitor
function deleteVisitor(btn, id) {
  console.log(btn);
  console.log(id);

  axios({
    method: "delete",
    url: "/visitor",
    data: { id: id },
  }).then((res) => {
    console.log(res.data);
    alert(res.data);

    // 실제 요소 지우기
    // remove
    // 1. parentElement 이용
    btn.parentElement.parentElement.remove();

    // 2. closet()
    // 특정 선택자를 가진 가장 가까운 조상 요소를 찾음
    // console.log(btn.closest(`#tr_${id}`));
    // btn.closest(`#tr_${id}`).remove();
  });
}

// 방명록 수정
// 1.수정을 위한 입력창으로 변경,
// 2. 수정 버튼을 누르면 기존 데이터가 input 의 value로 들어가게끔
//    ==> 한 개의 데이터 조회

const btnGroup = document.querySelector("#btn-group");
// GET /visitor/:id
function editVisitor(id) {
  console.log(id);

  axios({
    method: "get",
    url: `/visitor/${id}`,
    // params: { // req.query 로 전달됨
    //   id: id,
    // },
  }).then((res) => {
    console.log(res);
    const { data } = res;
    console.log(data);
    const form = document.forms["visitor-form"];
    form.name.value = data.name;
    form.comment.value = data.comment;
  });
  const html = `
  <button type="button" onclick="editDo(${id});">수정</button>
  <button type="button" onclick="editCancel();">취소</button>
  `;
  btnGroup.innerHTML = html;
}

// PATCH /visitor
function editDo(id) {
  const form = document.forms["visitor-form"];
  axios({
    url: "/visitor",
    method: "patch",
    data: {
      id: id,
      comment: form.comment.value,
      name: form.name.value,
    },
  }).then((res) => {
    // 프론트에서 데이터 변경할 수 있도록
    const children = document.querySelector(`#tr_${id}`).children;
    console.log(children);
    children[1].textContent = form.name.value;
    children[2].textContent = form.comment.value;

    editCancel();
  });
}

// 취소 버튼을 누르거나, 수정이 끝난 후 실행
function editCancel() {
  const form = document.forms["visitor-form"];
  // input 초기화
  form.name.value = "";
  form.comment.value = "";

  // 등록 버튼으로 변경

  btnGroup.innerHTML = `<button type="button" onclick="createVisitor();">방명록 등록</button>`;
}
