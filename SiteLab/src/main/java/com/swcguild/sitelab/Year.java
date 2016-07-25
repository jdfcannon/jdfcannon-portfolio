/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.swcguild.sitelab;

/**
 *
 * @author apprentice
 */
public class Year {
    private int year;
    private double yearStartBal;
    private double interestEarned;
    private double yearEndBal;

    public Year(int year, double yearStartBal, double interestEarned, double yearEndBal) {
        this.year = year;
        this.yearStartBal = yearStartBal;
        this.interestEarned = interestEarned;
        this.yearEndBal = yearEndBal;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getYearStartBal() {
        return yearStartBal;
    }

    public void setYearStartBal(double yearStartBal) {
        this.yearStartBal = yearStartBal;
    }

    public double getInterestEarned() {
        return interestEarned;
    }

    public void setInterestEarned(double interestEarned) {
        this.interestEarned = interestEarned;
    }

    public double getYearEndBal() {
        return yearEndBal;
    }

    public void setYearEndBal(double yearEndBal) {
        this.yearEndBal = yearEndBal;
    }
    
    
}
