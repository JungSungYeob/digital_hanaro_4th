package trythis.shape;

public class Rectangle extends Shape implements GeometricObject {
	private double width;
	private double height;

	public Rectangle(double width, double height) {
		this.width = width;
		this.height = height;
	}

	public double getWidth() {
		return width;
	}

	public void setWidth(double width) {
		this.width = width;
	}

	public double getHeight() {
		return height;
	}

	public void setHeight(double height) {
		this.height = height;
	}

	@Override
	public double calArea() {
		return this.width * this.height;
	}

	@Override
	public double getPerimeter() {
		return 2 * (this.width + this.height);
	}

	@Override
	public double getArea() {
		return this.width * this.height;
	}
}


