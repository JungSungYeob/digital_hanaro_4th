package trythis.company;

public class Employee {
	private int id;
	private String name;
	private int salary;

	public Employee(int id, String name, int salary) {
		this.id = id;
		this.name = name;
		this.salary = salary;
	}

	public int getAnnual() {
		return this.salary * 12;
	}

	public int getIncrease() {
		return this.salary * this.id * 10 / 100;
	}

	@Override
	public String toString() {
		return "Employee[id=%d, name=%s, salary=%d]의 연봉은 %d, 인상분은 %d".formatted(this.id, this.name, this.salary,
			this.getAnnual(), this.getIncrease());
	}
}
