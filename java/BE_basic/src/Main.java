import java.util.Scanner;

public class Main {
	@SuppressWarnings("checkstyle:WhitespaceAround")
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);

		System.out.print("마!! 점수 좀 입력해봐라!");
		int number = scan.nextInt();
		switch (number / 10) {
			case 9:
				System.out.println('A');
				break;
			case 8:
				System.out.println('B');
				break;
			case 7:
				System.out.println('C');
				break;
			case 6:
				System.out.println('D');
				break;
			default:
				System.out.println('F');
		}
	}
}


