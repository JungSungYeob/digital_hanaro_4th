package trythis.move;

public class MovableCircle implements Movable {
	private int radius;
	private MovablePoint center;

	public MovableCircle(int x, int y, int xSpeed, int ySpeed, int radius) {
		this.radius = radius;
		this.center = new MovablePoint(x, y, xSpeed, ySpeed);
	}

	@Override
	public void moveUP() {
		center.setY(center.getY() - center.getySpeed());
	}

	@Override
	public void moveDown() {
		center.setY(center.getY() + center.getySpeed());
	}

	@Override
	public void moveLeft() {
		center.setX(center.getX() - center.getxSpeed());
	}

	@Override
	public void moveRight() {
		center.setX(center.getX() + center.getxSpeed());
	}

	@Override
	public String toString() {
		return "MovableCircle{radius=%d, center=%s}".formatted(radius, center);
	}
}
