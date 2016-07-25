package com.swcguild.sitelab;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
//@RequestMapping({"/hello"})
public class SiteLabController {

//    public SiteLabController() {
//    }
//    
//    @RequestMapping(value="/sayhi", method=RequestMethod.GET)
//    public String sayHi(Map<String, Object> model) {
//        model.put("message", "Hello from the controller" );
//        return "hello";
//    }
    @RequestMapping(value = {"/home", "/"}, method = RequestMethod.GET)
    public String goHome() {
        return "index";
    }

    @RequestMapping(value = "/luckyseven", method = RequestMethod.GET)
    public String displayLuckySevens() {
        return "luckyseven";
    }

    @RequestMapping(value = "/LuckyResults", method = RequestMethod.POST)
    public String displayLuckySevensResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {

        Random r = new Random();
        int startDollaz = 0;
        int maxDollaz = 0;
        int maxRollz = 0;
        int maxDollaRollz = 0;

        // Ask user how much money
        System.out.println("How many dollars do you have?");
        startDollaz = Integer.parseInt(request.getParameter("money"));
        maxDollaz = startDollaz;
        // Rolls dice in while loop until money is gone
        do {
            int die1 = r.nextInt(6) + 1;
            int die2 = r.nextInt(6) + 1;
            int dice = die1 + die2;
            maxRollz++;
            if (dice == 7) {
                startDollaz = startDollaz + 4;
                if (startDollaz > maxDollaz) {
                    maxDollaz = startDollaz;
                    maxDollaRollz = maxRollz;
                }
            } else {
                startDollaz = startDollaz - 1;
            }

            if (startDollaz < 1) {
                System.out.println("You are broke after " + maxRollz + " rolls.");
                System.out.println("You should have quit after " + maxDollaRollz
                        + " when you had $" + maxDollaz + ".");
                break;
            }
        } while (startDollaz > 0);

        model.addAttribute("startingBet", Integer.parseInt(request.getParameter("money")));
        model.addAttribute("maxRolls", maxRollz);
        model.addAttribute("maxDollarRolls", maxDollaRollz);
        model.addAttribute("maxMoney", maxDollaz);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/lsresponse.jsp");
//        forwarder.forward(request, response);

        return "lsresponse";
    }

    @RequestMapping(value = "/factorizor", method = RequestMethod.GET)
    public String displayFactorizor() {
        return "factorizor";
    }

    @RequestMapping(value = "/FactorResults", method = RequestMethod.POST)
    public String displayFactorizorResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {
        int userNum = 0;
        int totalFactors = 0;
        int sum = 0;
        String prime = "";
        String perfect = "";
        List factors = new ArrayList<>();

        // Take input
        System.out.println("What number would you like to factor?");
        userNum = Integer.parseInt(request.getParameter("factorNumber"));

        // Factorize
        System.out.println("The factors of " + userNum + " are: ");
        for (int i = 1; i <= userNum; i++) {
            if (userNum % i == 0) {
                System.out.println(i);
                totalFactors++;
                factors.add(i);
                if (sum < userNum) {
                    sum = (sum + i);
                }
            }
        }

        // Output
        if (totalFactors == 2) {
            System.out.println(userNum + " is Prime");
            prime = userNum + " is Prime";
        } else {
            System.out.println(userNum + " is not Prime");
            prime = userNum + " is not Prime";
        }
        if (sum == userNum) {
            System.out.println(userNum + " is Perfect");
            perfect = userNum + " is Perfect";
        } else {
            System.out.println(userNum + " is not Perfect");
            perfect = userNum + " is not Perfect";
        }

        model.addAttribute("userNum", Integer.parseInt(request.getParameter("factorNumber")));
        model.addAttribute("prime", prime);
        model.addAttribute("perfect", perfect);
        model.addAttribute("factors", factors);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/factresponse.jsp");
//        forwarder.forward(request, response);

        return "factresponse";
    }

    @RequestMapping(value = "/interestcalc", method = RequestMethod.GET)
    public String displayInterestCalc() {
        return "interestcalc";
    }

    @RequestMapping(value = "/InterestCalcResults", method = RequestMethod.POST)
    public String displayInterestCalcResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {
        double balance = 0;
        double oldBalance = 0;
        double interestRate = 0;
        int interestFreq = 0;
        double quartInterestRate = 0;
        double monthlyInterestRate = 0;
        double dailyInterestRate = 0;
        double interestEarned = 0;
        int years = 0;
        List<Year> yearList = new ArrayList<>();

        String initialInvest = request.getParameter("initialInvest");
        String annualRate = request.getParameter("annualRate");
        String compoundFreq = request.getParameter("compoundFreq");
        String yearsInvested = request.getParameter("yearsInvested");

        // Get input
//        System.out.println("How much will you invest?");
        if (initialInvest == null
                || initialInvest.isEmpty()
                || annualRate == null
                || annualRate.isEmpty()
                || compoundFreq == null
                || compoundFreq.isEmpty()
                || yearsInvested == null
                || yearsInvested.isEmpty()) {
            model.addAttribute("badInput", true);
//            RequestDispatcher forwarder = request.getRequestDispatcher("jsp/icresponse.jsp");
//            forwarder.forward(request, response);
            return "icresponse";
        }
        balance = Integer.parseInt(initialInvest);
//        System.out.println("What is the annual interest rate?");
        interestRate = Integer.parseInt(annualRate);
//        System.out.println("Will the interest compound quarterly(1), monthly(2), or daily(3)?");
        interestFreq = Integer.parseInt(compoundFreq);
//        while (interestFreq < 1 || interestFreq > 3) {
//            System.out.println("Please enter 1, 2, or 3.");
//            interestFreq = sc.nextInt();
//        }

        quartInterestRate = interestRate / 4;
        monthlyInterestRate = interestRate / 12;
        dailyInterestRate = interestRate / 365;
//        System.out.println("How many years is the money to stay in the fund?");
        years = Integer.parseInt(yearsInvested);

        OUTER:
        for (int i = 1; i < years + 1; i++) {
//            System.out.println("Year " + i);
//            System.out.println("Principal at year start: " + balance);
            oldBalance = balance;
            switch (interestFreq) {
                case 1:
                    for (int q = 0; q < 4; q++) {
                        balance = balance * (1 + (quartInterestRate / 100));
                    }
                    break;
                case 2:
                    for (int m = 0; m < 12; m++) {
                        balance = balance * (1 + (monthlyInterestRate / 100));
                    }
                    break;
                case 3:
                    for (int d = 0; d < 365; d++) {
                        balance = balance * (1 + (dailyInterestRate / 100));
                    }
                    break;
                default:
//                    System.out.println("You broke it!");
                    break OUTER;
            }
            interestEarned = balance - oldBalance;
            interestEarned = Math.round(interestEarned * 100);
            interestEarned = interestEarned / 100;
            balance = Math.round(balance * 100);
            balance = balance / 100;
//            System.out.println("Total interest earned for the year: " + interestEarned);
//            System.out.println("Principal at year end: " + balance);

            yearList.add(new Year(i, oldBalance, interestEarned, balance));

//            request.setAttribute("years", years);
//            request.setAttribute("year", i);
//            request.setAttribute("yearStartBal", oldBalance);
//            request.setAttribute("interestEarned", interestEarned);
//            request.setAttribute("yearEndBal", balance);
        }

        model.addAttribute("yearList", yearList);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/icresponse.jsp");
//        forwarder.forward(request, response);

        return "icresponse";
    }

    @RequestMapping(value = "/flooringcalc", method = RequestMethod.GET)
    public String displayFlooringCalc() {
        return "flooringcalc";
    }

    
// Replace response with Model
    @RequestMapping(value = "/FlooringCalcResults", method = RequestMethod.POST)
    public String displayFlooringCalcResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {
        double flooringWidth = Double.parseDouble(request.getParameter("flooringWidth"));
        double flooringLength = Double.parseDouble(request.getParameter("flooringLength"));
        double costPerSqFt = Double.parseDouble(request.getParameter("costPerSqFt"));
        double area = flooringWidth * flooringLength;

        double materialCost = area * costPerSqFt;
        double laborCost = area / 5 * 21.5;

        if (area % 5 != 0) {
            while (area % 5 != 0) {
                area = area - 1;
            }
            laborCost = Math.floor(area / 5) * 21.5 + 21.5;
        }

        double totalCost = materialCost + laborCost;

// Model goes here
        model.addAttribute("materialCost", materialCost);
        model.addAttribute("laborCost", laborCost);
        model.addAttribute("totalCost", totalCost);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/fcresponse.jsp");
//        forwarder.forward(request, response);

        return "fcresponse";
    }

    @RequestMapping(value = "/tipcalc", method = RequestMethod.GET)
    public String displayTipCalc() {
        return "tipcalc";
    }

    @RequestMapping(value = "/TipResults", method = RequestMethod.POST)
    public String displayTipCalcResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {
        String subtotalParam = request.getParameter("subtotal");
        String tipPercentParam = request.getParameter("tipPercent");

        if (subtotalParam == null
                || subtotalParam.isEmpty()
                || tipPercentParam == null
                || tipPercentParam.isEmpty()) {
            model.addAttribute("badInput", true);
//            RequestDispatcher forwarder = request.getRequestDispatcher("jsp/tcresponse.jsp");
//            forwarder.forward(request, response);
            return "jsp/tcresponse";
        }

        double subtotal = Double.parseDouble(request.getParameter("subtotal"));
        double tipPercent = Double.parseDouble(request.getParameter("tipPercent"));
        double tip = subtotal * tipPercent;
        double total = tip + subtotal;

        model.addAttribute("subtotal", subtotal);
        model.addAttribute("tipPercent", tipPercent);
        model.addAttribute("tip", tip);
        model.addAttribute("total", total);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/tcresponse.jsp");
//        forwarder.forward(request, response);

        return "jsp/tcresponse";
    }

    @RequestMapping(value = "/converter", method = RequestMethod.GET)
    public String displayUnitConverter() {
        return "converter";
    }

    @RequestMapping(value = "/converter", method = RequestMethod.POST)
    public String displayUnitConverterResults(HttpServletRequest request, Model model)
            throws ServletException, IOException {

        String from = request.getParameter("convertFrom");
        String to = request.getParameter("convertTo");
        String valueStr = request.getParameter("valueToConvert");

        if (from == null || from.isEmpty()
                || to == null || to.isEmpty()
                || valueStr == null || valueStr.isEmpty()) {
            model.addAttribute("badInput", true);
//            RequestDispatcher forwarder = request.getRequestDispatcher("jsp/converter.jsp");
//            forwarder.forward(request, response);
            return "converter";
        }

        double value = Double.parseDouble(request.getParameter("valueToConvert"));
        double result = 0;

        if (from.equals("fahrenheit") && to.equals("celsius")) {
            result = (value - 32) * 5.0 / 9;
        } else if (from.equals("fahrenheit") && to.equals("kelvin")) {
            result = (value - 32) * 5.0 / 9 - 273;
        } else if (from.equals("celsius") && to.equals("fahrenheit")) {
            result = value * 9.0 / 5 + 32;
        } else if (from.equals("celsius") && to.equals("kelvin")) {
            result = value - 273;
        } else if (from.equals("kelvin") && to.equals("fahrenheit")) {
            result = value * 9.0 / 5 - 459.67;
        } else if (from.equals("kelvin") && to.equals("celsius")) {
            result = value - 273;
        }

        if (from.equals("dollar") && to.equals("pound")) {
            result = value * .75;
        } else if (from.equals("dollar") && to.equals("euro")) {
            result = value * .9;
        } else if (from.equals("pound") && to.equals("dollar")) {
            result = value / .75;
        } else if (from.equals("pound") && to.equals("euro")) {
            result = value * 1.2;
        } else if (from.equals("euro") && to.equals("pound")) {
            result = value / 1.2;
        } else if (from.equals("euro") && to.equals("dollar")) {
            result = value / .9;
        }

        if (from.equals("feet") && to.equals("miles")) {
            result = value / 5280.0;
        } else if (from.equals("feet") && to.equals("kilometers")) {
            result = value / 3280.84;
        } else if (from.equals("miles") && to.equals("kilometers")) {
            result = value * 1.60934;
        } else if (from.equals("miles") && to.equals("feet")) {
            result = value * 5280.0;
        } else if (from.equals("kilometers") && to.equals("feet")) {
            result = value * 3280.84;
        } else if (from.equals("kilometers") && to.equals("miles")) {
            result = value / 1.60934;
        }

        if (from.equals("quart") && to.equals("liter")) {
            result = value / 1.0567;
        } else if (from.equals("quart") && to.equals("ounce")) {
            result = value * 32;
        } else if (from.equals("liter") && to.equals("quart")) {
            result = value * 1.0567;
        } else if (from.equals("liter") && to.equals("ounce")) {
            result = value * 33.81;
        } else if (from.equals("ounce") && to.equals("liter")) {
            result = value / 33.81;
        } else if (from.equals("ounce") && to.equals("quart")) {
            result = value / 32;
        }

        model.addAttribute("result", result);
        model.addAttribute("to", to);
        model.addAttribute("from", from);
        model.addAttribute("value", value);
        model.addAttribute("isRendered", true);
//        RequestDispatcher forwarder = request.getRequestDispatcher("jsp/converter.jsp");
//        forwarder.forward(request, response);

        return "converter";
    }

}
