package trythis.shape;

public class Circle extends Shape implements GeometricObject {
	private double radius = 1.0;
	private String color = "red";

	public Circle() {

	}

	public Circle(double radius) {
		this.radius = radius;
	}

	public void setRadius(double radius) {
		this.radius = radius;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public double getRadius() {
		return this.radius;
	}

	public double getArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	public double getPerimeter() {
		return 2 * Math.PI * this.radius;
	}

	@Override
	public double calArea() {
		return Math.PI * Math.pow(this.radius, 2);
	}

	public double getCircumference() {
		return 2 * Math.PI * this.radius;
	}

	@Override
	public String toString() {
		return "Circle[radius=" + this.radius + "]의 둘레는 " + this.getCircumference() + ", 면적은 " + this.getArea();
	}
}
