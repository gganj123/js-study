const addForm = document.querySelector('.add');
const list = document.querySelector('.memos');
const alertmsg = document.getElementById('alertmsg');


const saveMemo = memotext => {
    const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
  </li>`

  list.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${memotext}</span><i class="far fa-trash-alt delete"></i>
</li>`
}

addForm.addEventListener('submit',e => {
    e.preventDefault();
    const memo = addForm.add.value;
    console.log(memo);
    // saveMemo(memo);

    if (memo.length) {
        saveMemo(memo);
        alertmsg.classList.add('hidden');
        addForm.add.value = '';
    }
    else{
        console.log('메모없음');
        alertmsg.classList.remove('hidden');
    }
})