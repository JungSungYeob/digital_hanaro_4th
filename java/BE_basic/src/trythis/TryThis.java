package trythis;

import trythis.shape.Circle;

public class TryThis {
	public static void main(String[] args) {
		Circle circle1 = new Circle();
		Circle circle2 = new Circle(2.0);

		System.out.println(circle1.toString());
		System.out.println(circle2.toString());
	}
}
