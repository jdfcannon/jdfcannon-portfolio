<%-- 
    Document   : results
    Created on : Jul 10, 2016, 6:19:46 PM
    Author     : apprentice
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Spring MVC Projects</title>
        <!-- Bootstrap core CSS -->
        <link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">

        <!-- SWC Icon -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icon.png">

    </head>
    <body>
        <div class="container">
            <h1>Spring MVC Projects</h1>
            <hr/>
            <div class="navbar">
                <ul class="nav nav-tabs">
                    <li role="presentation"><a href="${pageContext.request.contextPath}/home">Home</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/luckyseven">Lucky Sevens</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/factorizor">Factorizor</a></li>
                    <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/interestcalc">Interest Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/flooringcalc">Flooring Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/tipcalc">Tip Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/converter">Unit Converter</a></li>
                </ul>    
            
        <div align='center'>
            <h1>Interest Calculator</h1>
            <h3>Results</h3>
            <c:if test="${badInput}">
                <p>You are not accessing this page in a valid manner.</p>
            </c:if>
            <c:forEach items="${yearList}" var="year">
                <c:out value="Year ${year.year}:" default="What year?"/>
                <p><c:out value="Principal at year start: ${year.yearStartBal}" 
                       default="Provide a valid entry"/></p>
                <p><c:out value="Total interest earned for the year: ${year.interestEarned}" 
                       default="Provide a valid entry"/></p>
                <p><c:out value="Principal at year end: ${year.yearEndBal}" 
                       default="Provide a valid entry"/></p>
                </c:forEach>
            <h4><a href="${pageContext.request.contextPath}/interestcalc" class="button">Calculate Again?</h4>
        </div>
        </div>
        </div> 
    </body>
</html>
