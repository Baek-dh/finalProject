const landmark = document.getElementsByClassName("landmark");
const selected = document.getElementsByClassName("selected-landmark");
const showContent = document.querySelectorAll(".showContent");
const container2 = document.querySelector(".container2");
const deleteBtn = document.getElementById("deleteBtn");
const goToList = document.getElementById("goToList");


// let movelineNo;
// let landmarkNo;

// 특정 랜드마크 이미지 + 내용 세팅
for (let i = 0; i < landmark.length; i++) {
  landmark[i].addEventListener("click", function () {
    landmarkNo = this.getAttribute("value");

    // var click_val = $("#id").val();
    // alert(click_val);

    // alert(this.getAttribute("id"));
    // alert(this.getAttribute("value"));

    $.ajax({
      url: contextPath + "/moveline-main/detail/setLandmarkImages",
      data: { landmarkNo: this.getAttribute("value") },
      type: "get",
      dataType: "JSON",
      success: function (map) {
        const landmarkImageList = map.landmarkImageList;
        const landmarkContent = map.landmarkContent;

        // alert(landmarkContent);
        // alert(landmarkImageList);
        // alert(landmarkContentList);

        console.log("size : " + landmarkImageList[0].landMarkReName);
        const entire = document.getElementById("entire"); // 사진 아래 제거
        // const test2 = document.getElementById("landmark-explain"); // 상세설명 내용 제거
        entire.innerHTML = "";
        // test2.innerHTML = "";

        // test1.style.left = "0%";
        const test1 = document.createElement("ul");
        test1.classList.add("slider-container2", "simple-list", "slider2");
        test1.setAttribute("id", "test1");

        entire.append(test1);

        let leftSize = 0;

        // 행
        for (let simpleList of landmarkImageList) {
          console.log("reName Log : " + simpleList.landMarkReName);
          const slide2 = document.createElement("li");
          slide2.setAttribute("id", "landmark-images");
          // slide2.classList.add("slide2");
          slide2.classList.add("slide2Plus");
          slide2.style.left = leftSize + "%";
          leftSize += 100;

          const slideImg2 = document.createElement("img");
          slideImg2.classList.add("slide-img2");
          slideImg2.setAttribute(
            "src",
            contextPath + simpleList.landMarkReName
          );

          test1.append(slide2);
          slide2.append(slideImg2);
        }

        let pager = document.createElement("p");
        pager.classList.add("pager2");

        entire.append(pager);

        for (let i = 0; i < landmarkImageList.length; i++) {
          const span = document.createElement("span");
          span.setAttribute("data-index", i);
          span.innerText = i + 1;

          if (i == 0) {
            span.classList.add("active");
          }
          pager.append(span);

          span.addEventListener("click", function (event) {
            var pagerNum2 = event.target.innerText - 1;
            goToSlide2(pagerNum2);
          });
        }

        const prev2 = document.createElement("a");
        prev2.classList.add("prev2");

        const left = document.createElement("li");
        left.classList.add("fa-solid", "fa-angle-left");

        prev2.append(left);

        const next2 = document.createElement("a");
        next2.classList.add("next2");

        const right = document.createElement("li");
        right.classList.add("fa-solid", "fa-angle-right");

        next2.append(right);

        const content4 = document.createElement("div");
        // content4.classList.add("landmarkContent");

        const content3 = document.createElement("p");
        content3.classList.add("landmarkContent");
        content3.innerText = landmarkContent;

        content4.append(content3);
        entire.append(prev2, next2, content4);

        $pager2 = document.querySelector(".pager2");
        $slide2 = document.querySelectorAll(".slide2Plus");
        $currentIndex2 = 0;
        $slideCount2 = $slide2.length;
        $pagerBtn2 = document.querySelectorAll(".pager2 span");

        $slideContainer2 = document.querySelector(".slider-container2");

        // for(let content of landMarkContent){
        //     console.log("content log : " + content.landMarkContent)

        // }

        prev2.addEventListener("click", function () {
          //goToSlide($currentIndex - 1);

          if ($currentIndex2 == 0) {
            //$navPrev.classList.add('disabled');
            goToSlide2($slideCount2 - 1);
          } else {
            //$navPrev.classList.remove('disabled');
            goToSlide2($currentIndex2 - 1);
          }
        });

        next2.addEventListener("click", function () {
          //goToSlide($currentIndex + 1);

          if ($currentIndex2 == $slideCount2 - 1) {
            // $navNext.classList.add('disabled');
            goToSlide2(0);
          } else {
            // $navNext.classList.remove('disabled');
            goToSlide2($currentIndex2 + 1);
          }
        });
      },

      error: function (req, status, error) {
        console.log("실패");
        console.log(req.responseText);
      },
    });
  });
}



// 코스 삭제 (주소 처리 미완)
(function(){
  
  const deleteBtn = document.getElementById("deleteBtn");
  if(deleteBtn != null){ // 버튼이 화면에 존재할 때
    deleteBtn.addEventListener("click", function(){
          let url = contextPath + "/moveline-main/detail/delete/"+ movelineNo;

          if( confirm("정말로 삭제 하시겠습니까?") ){
              location.href = url; // get방식으로 url에 요청
          }
      });
  }
})();

// 목록으로
(function(){
  
  const goToList = document.getElementById("goToList");
  if(goToList != null){
    goToList.addEventListener("click", function(){
          let url = contextPath + "/moveline-main/detail/goToList";
          location.href = url;
      });
  }
})();


// //즐겨찾기 버튼 js - 상세페이지
// const bookmarkBtn = document.querySelector(".btn-bookmark");
// const bookmarkOn = document.querySelector(".bookmarkOn");
// const bookmarkOff = document.querySelector(".bookmarkOff");

// bookmarkBtn.addEventListener("click", () => {
//   bookmarkOn.classList.toggle("active");
//   bookmarkOff.classList.toggle("d-none");
// });


// (() => {
//     if ($(".bookmarkValue").val() == 0) {
//         $(".bookmarkOff").toggleClass("hide");
//     }

//     if ($(".bookmarkValue").val() == 1) {
//         $(".bookmarkOn").toggleClass("hide");
//     }
// })();


// $(".btn-bookmark").click(() => {
//   if (userNo == "") {
//     alert("로그인 후 이용하세요.");
//     return;
//   }

//       if (userNo != 0) {
        
//           if ($(".bookmarkValue").val() == 0) {
//               $.ajax({
//                   url: contextPath + "/moveline-main/list/bookmarkSet/" + movelineNo,
//                   data: { "userNo": userNo },
//                   type: "get",
//                   success: function (result) {
//                       result = result * 1
//                       if (result == '1') {
//                           alert("해당 랜드마크를 즐겨찾기 목록에 추가하였습니다.");
//                           $(".bookmarkOn").toggleClass("hide");
//                           $(".bookmarkOff").toggleClass("hide");
//                           $(".bookmarkValue").val('1');
//                       };
//                   }
//               });
//           }
//           if ($(".bookmarkValue").val() != 0) {
//               if (confirm("즐겨찾기를 삭제하시겠습니까?")) {
//                   $.ajax({
//                       url: contextPath + "/moveline-main/list/bookmarkDelete/" + movelineNo,
//                       data: { "userNo": userNo },
//                       type: "get",
//                       success: function (result) {
//                           alert("해당 랜드마크를 즐겨찾기 목록에서 삭제하였습니다.");
//                           $(".bookmarkOn").toggleClass("hide");
//                           $(".bookmarkOff").toggleClass("hide");
//                           $(".bookmarkValue").val('0');
//                       }
//                   })
//               }
//           }
//       }
//   });





// 상세설명 비동기
// showContent.addEventListener("click", function () {
//   // alert(landmarkNo)

//   $.ajax({
//     url: contextPath + "/moveline-main/detail/setLandmarkContent",
//     data: { landmarkNo: landmarkNo },
//     type: "get",
//     dataType: "JSON",
//     success: function (landmarkContent) {
//       const entire = document.getElementById("entire"); // 상세설명 내용 제거
//       entire.innerHTML = "";

//       console.log(landmarkContent);

//       const test1 = document.createElement("ul");
//       test1.setAttribute("id", "test1");
//       test1.classList.add(".slider-container2", ".simple-list", ".slider2");

//       const contentArea = document.createElement("div");
//       contentArea.setAttribute("id", "landmark-explain");

//       const inputContent = document.createElement("li");
//       inputContent.classList.add(".landmark");
//       inputContent.innerHTML = landmarkContent;

//       console.log(landmarkContent);

//       entire.append(test1);
//       test1.append(contentArea);
//       contentArea.append(inputContent);
//     },
//   });
// });

// showImage.addEventListener("click", function () {
//     alert(landmarkNo)
//     landmarkNo = this.getAttribute("class");

//     // landmarkNo = this.getAttribute("id");
//     // var click_val = $("#id").val();
//     // alert(click_val);

//     // alert(this.getAttribute("id"));
//     // alert(this.getAttribute("value"));

//     $.ajax({
//         url: contextPath + "/moveline-main/detail/setLandmarkImages",
//         data: { "landmarkNo": landmarkNo },
//         type: "get",
//         dataType: "JSON",
//         success: function (landmarkImageList) {

//             const entire = document.getElementById("entire"); // 상세설명 내용 제거
//             entire.innerHTML = "";

//         }
//     });
// });

//     showImage.addEventListener("click", function () {
//     alert(landmarkNo)
//     landmarkNo = this.getAttribute("class");

//     // landmarkNo = this.getAttribute("id");
//     // var click_val = $("#id").val();
//     // alert(click_val);

//     // alert(this.getAttribute("id"));
//     // alert(this.getAttribute("value"));

//     $.ajax({
//         url: contextPath + "/moveline-main/detail/setLandmarkImages",
//         data: { "landmarkNo": landmarkNo },
//         type: "get",
//         dataType: "JSON",
//         success: function (landmarkImageList) {

//             alert(landmarkImageList);
//             // alert(landmarkContentList);

//             console.log("size : " + landmarkImageList[0].landMarkReName);
//             const test1 = document.getElementById("test1"); // 사진 아래 제거
//             const test2 = document.getElementById("landmark-explain"); // 상세설명 내용 제거
//             test1.innerHTML = "";
//             test2.innerHTML = "";

//             test1.style.left = "0%";

//             let leftSize = 0;

//             // 행
//             for (let simpleList of landmarkImageList) {
//                 console.log("reName Log : " + simpleList.landMarkReName);
//                 const slide2 = document.createElement("li");
//                 slide2.setAttribute("id", "landmark-images");
//                 slide2.classList.add("slide2");

//                 slide2.style.left = (leftSize)  + "%";
//                 leftSize += 100;

//                 const slideImg2 = document.createElement("img");
//                 slideImg2.setAttribute("src", contextPath + simpleList.landMarkReName);

//                 test1.append(slide2);
//                 slide2.append(slideImg2);
//             }

//             let pager = document.querySelector(".pager2");
//             pager.innerHTML = "";

//             for (let i= 0 ; i<landmarkImageList.length ; i++) {
//                 const span = document.createElement("span");
//                 span.setAttribute("data-index", i);
//                 span.innerText = i+1;

//                 if(i == 0){
//                     span.classList.add("active");
//                 }
//                 pager.append(span);

//                 pager.addEventListener('click',function(event){
//                     var pagerNum2 = event.target.innerText - 1;
//                     goToSlide2(pagerNum2);
//                 });
//             }

//             $pager2 = document.querySelector('.pager2');
//             $slide2 = document.querySelectorAll('.slide2');
//             $currentIndex2 = 0;
//             $slideCount2 = $slide2.length;
//             $pagerBtn2 = document.querySelectorAll('.pager2 span');
//             // for(let content of landMarkContent){
//             //     console.log("content log : " + content.landMarkContent)

//             // }

//         },

//         error: function (req, status, error) {
//             console.log("실패")
//             console.log(req.responseText);
//         }
//     });
// });

// showContent.addEventListener("click", function () {

//     $.ajax({
//         url: contextPath + "/moveline-main/detail/setLandmarkImages",
//         data: { "landmarkNo": landmarkNo },
//         type: "get",
//         dataType: "JSON",
//         success: function (landmarkContent) {

//             console.log("size : " + landmarkImageList[0].landMarkReName);
//                     const test1 = document.getElementById("test1"); // 사진 아래 제거
//                     const test2 = document.getElementById("landmark-explain"); // 상세설명 내용 제거
//                     test1.innerHTML = "";
//                     test2.innerHTML = "";

//                     test1.style.left = "0%";

//                     let leftSize = 0;

//                     // 행
//                     for (let simpleList of landmarkImageList) {
//                         console.log("reName Log : " + simpleList.landMarkReName);
//                         const slide2 = document.createElement("li");
//                         slide2.setAttribute("id", "landmark-images");
//                         slide2.classList.add("slide2");

//                         slide2.style.left = (leftSize)  + "%";
//                         leftSize += 100;

//                         const slideImg2 = document.createElement("img");
//                         slideImg2.setAttribute("src", contextPath + simpleList.landMarkReName);

//                         test1.append(slide2);
//                         slide2.append(slideImg2);
//                     }

//                     let pager = document.querySelector(".pager2");
//                     pager.innerHTML = "";

//                     for (let i= 0 ; i<landmarkImageList.length ; i++) {
//                         const span = document.createElement("span");
//                         span.setAttribute("data-index", i);
//                         span.innerText = i+1;

//                         if(i == 0){
//                             span.classList.add("active");
//                         }
//                         pager.append(span);

//                         pager.addEventListener('click',function(event){
//                             var pagerNum2 = event.target.innerText - 1;
//                             goToSlide2(pagerNum2);
//                         });
//                     }

//                     $pager2 = document.querySelector('.pager2');
//                     $slide2 = document.querySelectorAll('.slide2');
//                     $currentIndex2 = 0;
//                     $slideCount2 = $slide2.length;
//                     $pagerBtn2 = document.querySelectorAll('.pager2 span');
//                     // for(let content of landMarkContent){
//                     //     console.log("content log : " + content.landMarkContent)

//                     // }

//         }
//     })
// });

// $(".showContent").bind("click", function () {
//     var oData = test($(this).parent().parent()); //이넘이 자신 상위에 상위 요소 가지고 옴.
//     test(oData);
// });

// 코스 삭제
// (function(movelineNo){
//     const deleteBtn = document.getElementById("deleteBtn");

//     console.log("deleteBtn clicked");

//     if(deleteBtn != null){
//         deleteBtn.addEventListener("click", function(){

//             let url = contextPath + "/moveline-main/detail/delete/" + movelineNo;

//             if( confirm("정말로 삭제 하시겠습니까?") ){
//                 location.href = url; // get방식으로 url에 요청
//             }

//         });
//     }

// })();

// 코스 삭제
// function deleteMoveline(movelineNo) {
//   if (confirm("정말로 삭제 하시겠습니까?")) {
//   } else {
//     return;
//   }

//     $.ajax({
//       url: contextPath + "/moveline-main/detail/delete",
//       data: { movelineNo: movelineNo },
//       type: "GET",
//       success: function (result) {
//         console.log("result 값 넘어옴");
  
//         if (result > 0) {
//           alert("코스를 삭제하였습니다.");
//           // alert(message);
//           let url = contextPath + "/moveline-main/list";
//           location.href = url;
//         } else {
//           alert("코스를 삭제하지 못하였습니다.");
//           // alert(message);
//         }
//       },
//       error: function (req, status, error) {
//         console.log("코스 삭제 실패");
//         console.log(req.responseText);
//       },
//     });
// }





// const deleteBtn = document.getElementById("deleteBtn");

// function deleteMoveline(movelineNo) {

//     deleteBtn.addEventListener("click", function(){

//           alert(movelineNo);

//           let url = contextPath + "/moveline-main/detail/delete"+ movelineNo

//           if( confirm("정말로 삭제 하시겠습니까?") ){
//               location.href = url; // get방식으로 url에 요청
//           }

//       });
//   }






// 코스 신고
// function reportMoveline(movelineNo) {
//   if (confirm("정말로 신고 하시겠습니까?")) {
//     $.ajax({
//       url: contextPath + "/moveline-main/detail/report",
//       data: { movelineNo: movelineNo },
//       type: "GET",
//       success: function (result) {
//         if (result > 0) {
//           alert("신고 되었습니다");
//           selectReplyList(); // 목록을 다시 조회해서 삭제된 글을 제거
//         } else {
//           alert("신고 실패");
//         }
//       },

//       error: function (req, status, error) {
//         console.log("실패");
//         console.log(req.responseText);
//       },
//     });
//   }
// }


