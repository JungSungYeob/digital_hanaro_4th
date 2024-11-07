package trythis.bank;

import java.util.Scanner;

public class Account {

	private String id;
	private String name;
	private int balance = 0;
	private Scanner scan;

	public Account() {
	}

	public Account(String id, String name) {
		this.id = id;
		this.name = name;
	}

	public Account(String id, String name, int balance) {
		this.id = id;
		this.name = name;
		this.balance = balance;
	}

	public void login(Scanner scanner) {
		if (scanner == null) {
			if (this.scan == null) {
				this.scan = new Scanner(System.in);
			}
		}
		this.scan = scanner;
	}

	public int getBalance() {
		return balance;
	}

	public void setBalance(int balance) {
		this.balance = balance;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int deposit(int amount) {
		this.balance += amount;
		return this.balance;
	}

	public int withdraw(int amount) {
		if (this.balance < amount) {
			System.out.println("출금액이 잔액초과");
			return this.balance;
		}
		this.balance -= amount;
		return this.balance;
	}

	public int transferTo(Account another, int amount) {
		System.out.println("얼마 송금하시겠어요?");

		if (this.balance < amount) {
			System.out.println("송금액이 잔액초과");
			return this.balance;
		}

		another.balance += amount;
		this.balance -= amount;
		return this.balance;
	}

	@Override
	public String toString() {
		return "Account[id='%s', name='%s', balance=%d]".formatted(id, name, balance);
	}
}
