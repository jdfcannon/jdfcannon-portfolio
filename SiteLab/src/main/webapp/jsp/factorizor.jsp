<%-- 
    Document   : index
    Created on : Jul 10, 2016, 6:19:11 PM
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
                    <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/factorizor">Factorizor</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/interestcalc">Interest Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/flooringcalc">Flooring Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/tipcalc">Tip Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/converter">Unit Converter</a></li>
                </ul>    

                <div align='center'>
                    <h1>Factorizor</h1>
                    <p>What number would you like to factor?</p>
                    <form action="FactorResults" method="POST" class="form-horizontal">
                        <div class="form-group">
                            <label for='factorNumber' class="control-label">Number to Factor:</label>
                            <input type="number" name="factorNumber" id="factorNumber"/>
                        </div>
                        <div class="form-group">
                            <input type="submit" value="Factor"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
