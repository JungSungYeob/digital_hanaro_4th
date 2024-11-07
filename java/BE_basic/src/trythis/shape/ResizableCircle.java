package trythis.shape;

public class ResizableCircle extends Circle implements Resizable {
	public ResizableCircle(double radius) {
		super(radius);
	}

	public void resize(int percent) {
		super.setRadius(super.getRadius() * (1 + (double)percent / 100));
	}

	@Override
	public String toString() {
		return "ResizableCircle{radius = %.1f, 둘레 = %.1f, 면적은 %.1f}".formatted(super.getRadius(), super.getPerimeter(),
			super.getArea());
	}
}
