package trythis.point;

public class ColorPoint extends Point {
	public static void main(String[] args) {
		Point p1 = new Point();
		p1.set(10, 20);
		p1.showPoint();

		ColorPoint cp = new ColorPoint();
		cp.set(200, 100);
		cp.showPoint();
	}

}
