fn main() {
    println!("cargo:rerun-if-changed=.pake/pake.json");
    println!("cargo:rerun-if-changed=.pake/tauri.conf.json");
    // Limit DLL exports to avoid PE export table overflow (max 65535).
    // The implicit export table generated from all public Rust symbols can easily
    // exceed the Windows PE limit; a DEF file keeps only the C ABI entry points.
    println!("cargo:rustc-cdylib-link-arg=app_lib.def");
    tauri_build::build()
}
