package trythis.bookstore;

import java.text.DecimalFormat;
import java.util.Calendar;
import java.util.Random;

public class Visit extends Customer {
	private Customer customer;
	private Calendar date;
	private int serviceExpense;
	private int productExpense;

	public Visit(Customer customer, Calendar date) {
		super(customer.getName(), customer.isMember());
		this.date = date;
		Random random = new Random();
		serviceExpense = random.nextInt(1000, 1000000);
		productExpense = random.nextInt(50000, 5000000);
	}

	public String getName() {
		return this.customer.getName();
	}

	public Calendar getDate() {
		return this.date;
	}

	public int getDiscountPrice() {
		double discountProductRate = DiscountRate.getProductDiscountRate(super.getMemberType());
		double discountServiceRate = DiscountRate.getServiceDiscountRate(super.getMemberType());
		return (int)((this.productExpense * (1 - discountProductRate)) + (this.serviceExpense * (1
			- discountServiceRate)));
	}

	@Override
	public String toString() {
		DecimalFormat df = new DecimalFormat("#,###");
		return "Visit{customer=Customer[name=%s, member=%b, memberType= %s], date=%s, serviceExpense=%s, productExpense=%s}, 총 사용 비용 = %s원".formatted(
			super.getName(), super.isMember(), super.getMemberType(), date.getTime(),
			df.format(serviceExpense), df.format(productExpense), df.format(getDiscountPrice()));
	}
}
