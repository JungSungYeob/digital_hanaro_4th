package trythis.animal;

public interface Flyable {
	public void fly();

	public default void landing() {
		System.out.println("landing");
		run();
	}

	private void run() {
		System.out.println("Flyable - Run!!");
	}
}
