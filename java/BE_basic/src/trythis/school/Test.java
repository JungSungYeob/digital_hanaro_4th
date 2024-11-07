package trythis.school;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.ListIterator;
import java.util.Scanner;

public class Test {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		List<Integer> scoreList = new ArrayList<Integer>();

		while (true) {
			System.out.println("마 점수를 입력해봐라");
			int score = scanner.nextInt();
			if (score < 0) {
				break;
			}
			scoreList.add(score);
		}
		System.out.println("학생들의 성적: " + scoreList.toString());
		// for (Integer score : scoreList) {
		// 	System.out.println(Grade.getGrade(score));
		// }
		ListIterator<Integer> iterator = scoreList.listIterator();
		while (iterator.hasNext()) {
			int score = iterator.next();
			int index = iterator.nextIndex();
			System.out.printf("%d 학생의 성적은 %d점이며 학점은 %s이다.\n", index, score, Grade.getGrade(score));
		}

		System.out.println("\n\n------------------------\n\n");
		System.out.println("추가 문제: 가장 높은 점수와 가장 낮은 점수는 삭제한 후 평균과 가장 높은 점수 출력하기");
		int max = 0;
		int min = 100;

		Collection<Integer> maxAll = new ArrayList<Integer>();
		Collection<Integer> minAll = new ArrayList<Integer>();
		for (Integer score : scoreList) {
			if (max < score) {
				maxAll.clear();
				max = score;
				maxAll.add(score);
			} else if (max == score) {

				maxAll.add(score);
			}

			if (min > score) {
				minAll.clear();
				min = score;
				minAll.add(score);
			} else if (min == score) {
				minAll.add(score);
			}
		}
		System.out.println("maxAll:" + maxAll.toString());
		System.out.println("minAll:" + minAll.toString());

		scoreList.removeAll(maxAll);
		scoreList.removeAll(minAll);

		System.out.println(scoreList.toString());
		iterator = scoreList.listIterator();
		int total = 0;
		while (iterator.hasNext()) {
			int score = iterator.next();
			int index = iterator.nextIndex();
			total += score;
			System.out.printf("%d 학생의 성적은 %d점이며 학점은 %s이다.\n", index, score, Grade.getGrade(score));
		}
		if (!scoreList.isEmpty()) {
			System.out.println("평균은 " + (double)(total) / (double)(scoreList.size()) + "입니다.");
		}

	}
}
