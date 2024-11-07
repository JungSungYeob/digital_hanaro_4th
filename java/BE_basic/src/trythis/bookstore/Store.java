package trythis.bookstore;

import java.util.Scanner;

public class Store {
	private Book book;
	private Scanner scanner;

	public void login(Scanner scan) {
		if (scanner != null) {
			return;
		}
		if (scan != null) {
			scanner = scan;
			return;
		}
		scanner = new Scanner(System.in);
	}

}

