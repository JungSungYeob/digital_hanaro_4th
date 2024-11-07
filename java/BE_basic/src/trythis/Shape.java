package trythis;

import trythis.shape.Circle;
import trythis.shape.Rectangle;
import trythis.shape.ResizableCircle;
import trythis.shape.ResizableRectangle;

public class Shape {
	public static void main(String[] args) {
		Circle circle = new Circle(5.0);
		Rectangle rectangle = new Rectangle(10, 20);
		System.out.println(circle.calArea());
		System.out.println(rectangle.calArea());
		ResizableCircle circle1 = new ResizableCircle(2.0);

		System.out.println(circle1.toString());
		circle1.resize(10);
		System.out.println(circle1.toString());

		ResizableRectangle rectangle1 = new ResizableRectangle(10, 20);

		System.out.println(rectangle1.toString());
		rectangle1.resize(20);
		System.out.println(rectangle1.toString());
	}
}
