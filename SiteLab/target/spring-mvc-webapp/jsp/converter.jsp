<%-- 
    Document   : index
    Created on : Jul 10, 2016, 6:19:11 PM
    Author     : apprentice
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="sf" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
    <head>
        <title>Spring MVC Projects</title>
        <!-- Bootstrap core CSS -->
        <link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet">

        <!-- SWC Icon -->
        <link rel="shortcut icon" href="${pageContext.request.contextPath}/img/icon.png"> 
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>

        <script>
            $(document).ready(function () {
                $("#convertFrom").children('option:gt(0)').hide();
                $("#convertTo").children('option:gt(0)').hide();
                $("#conversionType").change(function () {
                    var x = $('#conversionType').val();
                    if (x === "temperature") {
                        //alert("temperature has been selected");
                        $(".currency").hide();
                        $(".distance").hide();
                        $(".volume").hide();
                        $(".temp").show();

                    } else if (x === "currency") {
                        //alert("currency has been selected");
                        $(".temp").hide();
                        $(".distance").hide();
                        $(".volume").hide();
                        $(".currency").show();
                    } else if (x === "volume") {
                        // alert("volume has been selected");
                        $(".temp").hide();
                        $(".distance").hide();
                        $(".currency").hide();
                        $(".volume").show();
                    } else if (x === "distance") {
                        //alert("distance has been selected");
                        $(".temp").hide();
                        $(".currency").hide();
                        $(".volume").hide();
                        $(".distance").show();
                    }

                }
                );
            });
        </script>
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
                    <li role="presentation"><a href="${pageContext.request.contextPath}/interestcalc">Interest Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/flooringcalc">Flooring Calculator</a></li>
                    <li role="presentation"><a href="${pageContext.request.contextPath}/tipcalc">Tip Calculator</a></li>
                    <li role="presentation" class="active"><a href="${pageContext.request.contextPath}/converter">Unit Converter</a></li>
                </ul>    

                <div align='center'>
                    <h1>Unit Converter</h1>

                    <form action="converter" method="POST">
                        <p><select name="conversionType" id="conversionType">
                                <option value="conversionType">Conversion Type</option>
                                <option value="temperature">Temperature</option>
                                <option value="currency">Currency</option>
                                <option value="volume">Volume</option>
                                <option value="distance">Distance</option>
                            </select></p>


                        <p><select name="convertFrom" id="convertFrom">
                                <option>FROM</option>
                                <option class="temp" value="fahrenheit">Fahrenheit</option>
                                <option class="temp" value="celsius">Celsius</option>
                                <option class="temp" value="kelvin">Kelvin</option>

                                <option class="currency" value="dollar">Dollar</option>
                                <option class="currency" value="pound">Pound</option>
                                <option class="currency" value="euro">Euro</option>

                                <option class="volume" value="quart">Quart</option>
                                <option class="volume" value="liter">Liter</option>
                                <option class="volume" value="ounce">Ounce</option>

                                <option class="distance" value="feet">Feet</option>
                                <option class="distance" value="miles">Miles</option>
                                <option class="distance" value="kilometers">Kilometers</option>
                            </select></p>


                        <p><select name="convertTo" id="convertTo">
                                <option>TO</option>
                                <option class="temp" value="fahrenheit">Fahrenheit</option>
                                <option class="temp" value="celsius">Celsius</option>
                                <option class="temp" value="kelvin">Kelvin</option>

                                <option class="currency" value="dollar">Dollar</option>
                                <option class="currency" value="pound">Pound</option>
                                <option class="currency" value="euro">Euro</option>

                                <option class="volume" value="quart">Quart</option>
                                <option class="volume" value="liter">Liter</option>
                                <option class="volume" value="ounce">Ounce</option>

                                <option class="distance" value="feet">Feet</option>
                                <option class="distance" value="miles">Miles</option>
                                <option class="distance" value="kilometers">Kilometers</option>
                            </select></p>

                        <p><input type="number" name="valueToConvert" placeholder="Value to Convert"/></p>
                        <p><input id="converter" type="submit" value="Convert"/></p>
                            <c:if test="${isRendered}">
                            <p><h3><c:out value="${value} from ${from} to ${to} is: ${result}" /></h3></p>
                        </c:if>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
