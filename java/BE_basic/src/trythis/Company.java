package trythis;

import java.util.Scanner;

import trythis.company.Employee;
import trythis.company.InvoiceItem;

public class Company {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		Employee emp1 = new Employee(1, "코난", 25000000);
		Employee emp2 = new Employee(2, "장미", 30000000);
		Employee emp3 = new Employee(3, "미란", 40000000);

		System.out.println(emp1.toString());
		System.out.println(emp2.toString());
		System.out.println(emp3.toString());

		InvoiceItem item1 = new InvoiceItem("itemNo1", "coke", 400, 400);
		InvoiceItem item2 = new InvoiceItem("itemNo2", "sprite", 500, 400);
		InvoiceItem item3 = new InvoiceItem("itemNo3", "redbull", 1000, 200);
		InvoiceItem item4 = new InvoiceItem("itemNo4", "monster", 2000, 300);

		System.out.println(item1.toString());
		System.out.println(item2.toString());
		System.out.println(item3.toString());
		System.out.println(item4.toString());

	}
}
