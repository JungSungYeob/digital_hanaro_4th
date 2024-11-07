package trythis;

import java.util.Calendar;
import java.util.Random;
import java.util.Scanner;
import java.util.StringTokenizer;

import trythis.bookstore.Customer;
import trythis.bookstore.Visit;

public class Store {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		Visit[] visit = new Visit[5];
		for (int i = 0; i < 1; i++) {
			System.out.print("고객의 이름, 회원여부, 등급을 입력하세요 >>");
			String contents = scanner.nextLine();
			StringTokenizer st = new StringTokenizer(contents, " ");
			String name = st.nextToken();
			boolean member = st.nextToken().equals("true");
			Customer customer = new Customer(name, member);
			Calendar date = Calendar.getInstance();
			Random random = new Random();
			int randomDate = random.nextInt(1, 31);
			date.set(2024, 0, randomDate);
			visit[i] = new Visit(customer, date);
			if (member) {
				visit[i].setMemberType(st.nextToken());
			}
		}
		for (int i = 0; i < 1; i++) {
			System.out.println(visit[i].toString());
		}

	}
}
