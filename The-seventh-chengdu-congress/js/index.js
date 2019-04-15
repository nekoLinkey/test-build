// 0代表默认，1代表特邀，2代表律师
let seatArr = [
  [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1],
]

let peopleListData = [{
  letter: "A",
  datas: [{
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: false,
      isLeave: true
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }
  ]
}, {
  letter: "B",
  datas: [{
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }
  ]
}, {
  letter: "C",
  datas: [{
      name: "艾买提",
      seat: [12, 8],
      isSelf: true,
      isCheck: false,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: false,
      isLeave: true
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }
  ]
}, {
  letter: "D",
  datas: [{
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    },
    {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }, {
      name: "艾买提",
      seat: [12, 8],
      isSelf: false,
      isCheck: true,
      isLeave: false
    }
  ]
}]
peopleList(peopleListData);
// 名单渲染
function peopleList(datas) { 
  let navBox = $('#index-list-nav'),
      listBox = $('#index-list-detail'),
      nav = '',
      list= '';
    datas.map((d,i)=>{
      let lists = '',
          box = '',
          head = '',
          body = '';
      nav += `<a class="index-list-nav-item" data-link="#card-${d.letter}">${d.letter}</a>`
      head = `<h5 class="index-list-detail-title">${d.letter}</h5>`;
      
      d.datas.forEach((e,j)=>{
        lists += `<li class="index-list-detail-list-item ` + (e.isLeave ? 'isleave' : (e.isCheck ? 'signed' : (e.isSelf ? 'isself' : ''))) + `">
                    <span class="index-list-detail-list-item-name">${e.name}</span>
                    <span class="index-list-detail-list-item-seat">(${e.seat[0]}排${e.seat[1]}号)</span>
                    <button class="index-list-detail-list-item-btn checkin-btn" data-dialog type="button">签到</button>
                    <button class="index-list-detail-list-item-btn leave-btn" disabled="disabled" type="button">请假</button>
                  </li>`
      })
      body = `<ul class="index-list-detail-list">` + lists + `</ul>`;
      box = `<li class="index-list-detail-item" id="card-${d.letter}">` + head + body +`</li>`;
      list += box;
    })
      // console.log(datas);
      navBox.html(nav);
      listBox.html(list);
      // console.log(navBox);
      // console.log(listBox);
      
      
 }
// 渲染全部座位
// data = [12,1];
function seatChair(arr, data) {
  let lists = '';
  for (let i = 0; i < arr.length; i++) {
    let block1 = '',
      block2 = '',
      block3 = '',
      father = null;
    lists = '';
    // 此处i为第几排
    for (let j = 0; j < arr[i].length; j++) {
      // 此处j为第几个座位
      // 所以第几排第几个为arr[i][j]
      // 设置边界
      let min = 0,
        max = 0,
        seat = '';

      if (i == 0 || i == arr.length - 1) {
        seatOne(i, j)
      } else if (i == 1) {
        // 第一排边界与其他排不同单独设置
        min = 5;
        max = 16;
      } else {
        // 设置通用的边界
        min = 8;
        max = 19;
      }
      // 通过判断是否设置边界来返回lists
      if (min !== 0 && max !== 0) {
        seatOne(i, j, 1);
        if (j < min) {
          block1 += lists;
        } else if (j > max) {
          block3 += lists;
        } else {
          block2 += lists;
        }
      }
    }

    if (i == 0) {
      $('#seatBox-front').append(lists);
    } else if (i == arr.length - 1) {
      $('#seatBox-finally').attr('data-num', arr.length - 1).append(lists);
    } else {
      // 将所有组放到lists中返回
      lists = `<div class="index-header-seat-chairs behind" data-num="` + (i) + `">
            <ul class="index-header-seat-chairs-block">${block1}</ul>` +
        `<ul class="index-header-seat-chairs-block">${block2}</ul>` +
        `<ul class="index-header-seat-chairs-block">${block3}</ul>
            </div>`
      $("#seatBox-behind").append(lists);
    }

  }

  function seatOne(n, m, type) {
    let seat = '',
      text = '';
    if (data && n == data[0] && m == data[1] - 1) {
      seat = arr[n][m] + 1;
    } else {
      // 保存当前得到的html
      seat = data ? 1 : (arr[n][m] + 1);
    }
    text = `<li class="index-header-seat-chair-item">
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#iconseat` + seat + `"></use>
                    </svg>
                  </li>`;
    if (!type) {
      lists += text;
    } else {
      lists = text;
    }
  }

}


// 弹窗设置
// datas = {name:"XXX",sex:"XX",group:"XX",work:"XX",seat:["xxx","xxx"]}
let dialog = {
  init: function (datas) {
    return `<div class="check-inner-content">
          <p class="check-inner-content-item">
            <span class="check-inner-content-title">姓名</span>
            ${datas.name}
          </p>
          <p class="check-inner-content-item">
            <span class="check-inner-content-title">性别</span>
            ${datas.sex}
          </p>
          <p class="check-inner-content-item">
            <span class="check-inner-content-title">分组</span>
            ${datas.group}
          </p>
          <p class="check-inner-content-item">
            <span class="check-inner-content-title">工作单位</span>
            ${datas.work}
          </p>
          <div class="check-inner-content-item">
            <p class="check-inner-content-title">大会座位</p>
            <p class="check-inner-content-text">
              <span class="check-inner-content-text-item">${datas.seat[0]} (3月28日-3月29日)</span>
              <span class="check-inner-content-text-item">${datas.seat[1]} (3月30日)</span>
            </p>
          </div>
        </div>`
  },
  close: function () {
    $('.dialog').hide();
    $('.mask').hide();
    // $('.dialog-body').empty();
  },
  show: function () {
    $('.dialog').show();
    $('.mask').show();
  }
}

// 弹窗弹出事件
$('.index-list-detail').on('click', '[data-dialog]', function () {
  // 如需传入数据，直接调用 dialog.init(datas) 即可
  // dialog.init(datas);
  dialog.show();
})

// 签到按钮触发事件，
$('.dialog').on('click', '.dialog-submit-btn', function () {
  alert('签到成功！');
  dialog.close();
})

// 关闭弹窗
$('.dialog').on('click', '.dialog-close', function () {
  dialog.close();
})

// 点击遮罩层关闭弹窗
$('.mask').click(function () {
  dialog.close();
})

// 点击跳到指定地点
function link(h, speed) {
  $('html , body').animate({
    scrollTop: h
  }, speed || 'slow');
}

$('.index-list-nav').on('click', '[data-link]', function () {
  let el = $(this).attr('data-link'),
    top = $(el).offset().top;
  link(top);
})

// 返回顶部事件
$(document).scroll(function () {
  let sTop = $(document).scrollTop();
  if (sTop > 800) {
    $('.toTop').show();
  } else {
    $('.toTop').hide();
  }
})
$(document).on('click', '.toTop', function () {
  link(0);
})