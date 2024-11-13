package trythis;

import java.util.InputMismatchException;
import java.util.Scanner;

import trythis.bank.Account;

public class Bank {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		Account acc1 = new Account("11-111-1111", "코난", 20000);
		Account acc2 = new Account("22-222-2222", "장미", 100000);
		Account acc4 = new Account("33-333-3333", "뭉치", 200000001);

		System.out.println(acc1.toString());
		System.out.println(acc2.toString());
		System.out.println(acc4.toString());

		try {
			System.out.println("얼만큼 입금하시겠습니까");
			getAmount(scan.nextInt());
		} catch (InputMismatchException e) {
			System.out.println("금액은 소수점 단위로 입력이 불가합니다.");
		}

		System.out.printf("%s님이 %s에게 %d원 송금 시도\n", acc1.getName(), acc2.getName(), 30000);
		acc1.transferTo(acc2, 30000);

		acc1.deposit(50000);
		System.out.printf("%s님이 %d원 입금하였음\n", acc1.getName(), 50000);

		System.out.printf("%s님이 %s에게 %d원 송금 시도\n", acc1.getName(), acc2.getName(), 30000);
		acc1.transferTo(acc2, 30000);

		System.out.printf("%s님이 %d원 출금하였음\n", acc4.getName(), 5000);
		acc4.withdraw(5000);

		System.out.println(acc1.toString());
		System.out.println(acc2.toString());
		System.out.println(acc4.toString());

	}

	private static void getAmount(int num) throws InputMismatchException {
		int n = num;
		System.out.printf("입금하려는 금액은 %d원 입니다.\n", n);
	}
}
