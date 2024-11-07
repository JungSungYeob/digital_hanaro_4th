package trythis.shape;

public class ResizableRectangle extends Rectangle implements Resizable {
	public ResizableRectangle(double width, double height) {
		super(width, height);
	}

	public void resize(int percent) {
		super.setHeight(super.getHeight() * (1 + (double)(percent) / 100));
		super.setWidth(super.getWidth() * (1 + (double)(percent) / 100));
	}

	@Override
	public String toString() {
		return "ResizableRectangle{height = %.1f, width = %.1f, 둘레는 %.1f, 면적은 %.1f}".formatted(super.getHeight(),
			super.getWidth(), super.getPerimeter(), super.getArea());
	}
}
