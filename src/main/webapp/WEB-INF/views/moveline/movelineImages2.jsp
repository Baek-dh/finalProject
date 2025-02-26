<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script
      src="https://kit.fontawesome.com/243327ab3a.js"
      crossorigin="anonymous"
    ></script>
</head>
<body>
  <section class="slide3">
    <div class="container2" id="entire">
        <ul class="slider-container2 simple-list slider2"id="test1" style="visibility: hidden;">

          <c:forEach var="landmarkImage" items="${landmarkImage}">
            <li class="slide2" id="landmark-images">
              <c:set var="landmarkImage" value="${landmarkImage.landMarkReName}"/>
              <img class="slide-img2" src="${contextPath}/${landmarkImage}" alt="first_img">
            </li>
          </c:forEach>
          
        </ul>원하는 랜드마크를 클릭해주세요 !

        <p class="pager2" style="visibility: hidden;">
        </p>

        <a class="prev2" style="visibility: hidden;">
          <li class="fa-solid fa-angle-left" ></li>
        </a>
        <a class="next2" style="visibility: hidden;">
          <li class="fa-solid fa-angle-right"></li>
        </a>
        <div>
        <li class="landContent" style="visibility: hidden;"></li>
        </div>
    </div>
  </section>

</body>

    <%-- <script src="${contextPath}/resources/js/moveline/landmarkImageList.js"></script> --%>


</html>