(module
  (table $table0 1 1 funcref)
  (memory $memory (;0;) (export "memory") 1)
  (global $global0 (mut i32) (i32.const 36864))
  (func $__wasm_call_ctors (;0;) (export "__wasm_call_ctors")
    call $func3
  )
  (func $func1
    (local $var0 i32)
    (local $var1 i32)
    (local $var2 i32)
    (local $var3 i32)
    (local $var4 i32)
    global.get $global0
    i32.const 16
    i32.sub
    local.set $var0
    i32.const 0
    local.set $var1
    loop $label1
      i32.const 0
      local.set $var2
      i32.const 0
      local.set $var3
      loop $label0
        local.get $var0
        i32.const 8
        i32.add
        local.get $var2
        i32.add
        local.get $var3
        i32.const -128
        local.get $var1
        local.get $var2
        i32.shr_u
        i32.const 1
        i32.and
        local.tee $var4
        select
        i32.store8
        local.get $var3
        local.get $var4
        i32.add
        local.set $var3
        local.get $var2
        i32.const 1
        i32.add
        local.tee $var2
        i32.const 8
        i32.ne
        br_if $label0
      end $label0
      local.get $var1
      local.get $var3
      i32.store8 offset=38928
      local.get $var1
      i32.const 3
      i32.shl
      local.get $var0
      i64.load offset=8
      i64.store offset=36880
      local.get $var1
      i32.const 1
      i32.add
      local.tee $var1
      i32.const 256
      i32.ne
      br_if $label1
    end $label1
  )
  (func $meshopt_decodeVertexBuffer (;2;) (export "meshopt_decodeVertexBuffer") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (result i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    (local $var10 i32)
    (local $var11 i32)
    (local $var12 i32)
    (local $var13 i32)
    (local $var14 i32)
    (local $var15 i32)
    (local $var16 i32)
    (local $var17 i32)
    (local $var18 i32)
    (local $var19 i32)
    (local $var20 i32)
    (local $var21 i32)
    (local $var22 i32)
    (local $var23 i32)
    (local $var24 i32)
    (local $var25 i32)
    (local $var26 i32)
    (local $var27 i32)
    (local $var28 i32)
    (local $var29 i32)
    (local $var30 i32)
    (local $var31 v128)
    (local $var32 v128)
    (local $var33 i32)
    (local $var34 i32)
    (local $var35 v128)
    (local $var36 v128)
    (local $var37 v128)
    (local $var38 v128)
    (local $var39 v128)
    (local $var40 v128)
    (local $var41 v128)
    global.get $global0
    i32.const 9472
    i32.sub
    local.tee $var5
    global.set $global0
    i32.const -2
    local.set $var6
    block $label0
      local.get $var4
      i32.eqz
      br_if $label0
      i32.const -1
      local.set $var6
      local.get $var3
      i32.load8_u
      local.tee $var7
      i32.const 240
      i32.and
      i32.const 160
      i32.ne
      br_if $label0
      local.get $var7
      i32.const 15
      i32.and
      local.tee $var8
      i32.const 1
      i32.gt_u
      br_if $label0
      i32.const -2
      local.set $var6
      local.get $var4
      i32.const -1
      i32.add
      local.get $var2
      i32.const 2
      i32.shr_u
      i32.const 0
      local.get $var8
      select
      local.tee $var9
      local.get $var2
      i32.add
      local.tee $var7
      i32.const 24
      i32.const 32
      local.get $var8
      select
      local.tee $var10
      local.get $var7
      local.get $var10
      i32.gt_u
      select
      local.tee $var11
      i32.lt_u
      br_if $label0
      local.get $var3
      local.get $var4
      i32.add
      local.tee $var12
      local.get $var7
      i32.sub
      local.set $var6
      block $label1
        local.get $var2
        i32.eqz
        local.tee $var13
        br_if $label1
        local.get $var5
        local.get $var6
        local.get $var2
        memory.copy
      end $label1
      local.get $var3
      i32.const 1
      i32.add
      local.set $var14
      i32.const 8192
      local.get $var2
      i32.div_u
      i32.const 16368
      i32.and
      i32.const 256
      local.get $var2
      i32.const 32
      i32.gt_u
      select
      local.set $var15
      block $label4
        block $label3
          block $label2
            local.get $var2
            i32.eqz
            br_if $label2
            local.get $var6
            local.get $var2
            i32.add
            local.set $var16
            i32.const 0
            local.set $var17
            loop $label56
              local.get $var1
              local.get $var17
              i32.le_u
              br_if $label3
              local.get $var12
              local.get $var14
              i32.sub
              local.get $var9
              i32.lt_u
              br_if $label4
              local.get $var0
              local.get $var17
              local.get $var2
              i32.mul
              i32.add
              local.set $var18
              local.get $var14
              local.get $var9
              i32.add
              local.set $var19
              local.get $var15
              local.get $var1
              local.get $var17
              i32.sub
              local.get $var17
              local.get $var15
              i32.add
              local.get $var1
              i32.lt_u
              select
              local.tee $var20
              i32.const 15
              i32.add
              local.tee $var6
              i32.const 4
              i32.shr_u
              i32.const 3
              i32.add
              i32.const 2
              i32.shr_u
              local.set $var21
              local.get $var5
              i32.const 8448
              i32.add
              local.get $var6
              i32.const -16
              i32.and
              local.tee $var22
              i32.const 1
              i32.shl
              i32.add
              local.set $var23
              local.get $var5
              i32.const 8448
              i32.add
              local.get $var22
              i32.const 3
              i32.mul
              i32.add
              local.set $var24
              local.get $var5
              i32.const 8448
              i32.add
              local.get $var22
              i32.add
              local.set $var25
              i32.const 0
              local.set $var26
              local.get $var6
              i32.const 64
              i32.lt_u
              local.set $var27
              loop $label53
                i32.const 0
                local.set $var28
                block $label5
                  local.get $var8
                  i32.eqz
                  br_if $label5
                  local.get $var14
                  local.get $var26
                  i32.const 2
                  i32.shr_u
                  i32.add
                  i32.load8_u
                  local.set $var28
                end $label5
                i32.const 0
                local.set $var29
                local.get $var5
                i32.const 8448
                i32.add
                local.set $var30
                loop $label45
                  block $label10
                    block $label8
                      block $label6
                        block $label7
                          local.get $var28
                          local.get $var29
                          i32.const 1
                          i32.shl
                          i32.shr_u
                          i32.const 3
                          i32.and
                          local.tee $var6
                          i32.const -2
                          i32.add
                          br_table $label6 $label7 $label8
                        end $label7
                        local.get $var12
                        local.get $var19
                        i32.sub
                        local.get $var22
                        i32.lt_u
                        br_if $label4
                        block $label9
                          local.get $var22
                          i32.eqz
                          br_if $label9
                          local.get $var5
                          i32.const 8448
                          i32.add
                          local.get $var29
                          local.get $var22
                          i32.mul
                          i32.add
                          local.get $var19
                          local.get $var22
                          memory.copy
                        end $label9
                        local.get $var19
                        local.get $var20
                        i32.add
                        local.set $var19
                        br $label10
                      end $label6
                      local.get $var22
                      i32.eqz
                      br_if $label10
                      local.get $var5
                      i32.const 8448
                      i32.add
                      local.get $var29
                      local.get $var22
                      i32.mul
                      i32.add
                      i32.const 0
                      local.get $var22
                      memory.fill
                      br $label10
                    end $label8
                    local.get $var12
                    local.get $var19
                    i32.sub
                    local.get $var21
                    i32.lt_u
                    br_if $label4
                    local.get $var6
                    i32.const 4
                    i32.or
                    i32.const 0
                    local.get $var8
                    select
                    local.set $var7
                    local.get $var19
                    local.get $var21
                    i32.add
                    local.set $var6
                    i32.const 0
                    local.set $var3
                    block $label11
                      local.get $var27
                      br_if $label11
                      local.get $var12
                      local.get $var6
                      i32.sub
                      i32.const 96
                      i32.lt_u
                      br_if $label11
                      i32.const 0
                      local.set $var4
                      loop $label36
                        local.get $var30
                        local.get $var4
                        i32.add
                        local.set $var3
                        block $label17
                          block $label16
                            block $label15
                              block $label14
                                block $label13
                                  block $label12
                                    local.get $var19
                                    local.get $var4
                                    i32.const 6
                                    i32.shr_u
                                    i32.add
                                    i32.load8_u
                                    local.tee $var10
                                    i32.const 3
                                    i32.and
                                    local.get $var7
                                    i32.add
                                    br_table $label12 $label13 $label14 $label15 $label12 $label16 $label13 $label14 $label15 $label12
                                  end $label12
                                  local.get $var3
                                  v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
                                  v128.store
                                  br $label17
                                end $label13
                                local.get $var3
                                local.get $var6
                                v128.load offset=4 align=1
                                local.get $var6
                                v128.load align=1
                                local.tee $var31
                                i32.const 4
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                local.tee $var31
                                i32.const 2
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                v128.and
                                local.tee $var32
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                i8x16.eq
                                local.tee $var31
                                i64x2.extract_lane 0
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var33
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                local.get $var33
                                i32.load8_u offset=38928
                                local.tee $var33
                                i8x16.splat
                                local.get $var31
                                i64x2.extract_lane 1
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var34
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                i8x16.add
                                i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                                i8x16.swizzle
                                local.get $var32
                                local.get $var31
                                v128.bitselect
                                v128.store
                                local.get $var33
                                local.get $var6
                                i32.const 4
                                i32.add
                                i32.add
                                local.get $var34
                                i32.load8_u offset=38928
                                i32.add
                                local.set $var6
                                br $label17
                              end $label14
                              local.get $var3
                              local.get $var6
                              v128.load offset=8 align=1
                              local.get $var6
                              v128.load align=1
                              local.tee $var31
                              i32.const 4
                              i16x8.shr_s
                              local.get $var31
                              i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              v128.and
                              local.tee $var32
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              i8x16.eq
                              local.tee $var31
                              i64x2.extract_lane 0
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var33
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              local.get $var33
                              i32.load8_u offset=38928
                              local.tee $var33
                              i8x16.splat
                              local.get $var31
                              i64x2.extract_lane 1
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var34
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              i8x16.add
                              i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                              i8x16.swizzle
                              local.get $var32
                              local.get $var31
                              v128.bitselect
                              v128.store
                              local.get $var33
                              local.get $var6
                              i32.const 8
                              i32.add
                              i32.add
                              local.get $var34
                              i32.load8_u offset=38928
                              i32.add
                              local.set $var6
                              br $label17
                            end $label15
                            local.get $var3
                            local.get $var6
                            v128.load align=1
                            v128.store
                            local.get $var6
                            i32.const 16
                            i32.add
                            local.set $var6
                            br $label17
                          end $label16
                          local.get $var3
                          local.get $var6
                          v128.load offset=2 align=1
                          local.get $var6
                          i32.load8_u
                          local.tee $var33
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          local.get $var33
                          i32.load8_u offset=38928
                          local.tee $var33
                          i8x16.splat
                          local.get $var6
                          i32.load8_u offset=1
                          local.tee $var34
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          i8x16.add
                          i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                          i8x16.swizzle
                          v128.store
                          local.get $var33
                          local.get $var6
                          i32.const 2
                          i32.add
                          i32.add
                          local.get $var34
                          i32.load8_u offset=38928
                          i32.add
                          local.set $var6
                        end $label17
                        block $label23
                          block $label22
                            block $label21
                              block $label20
                                block $label19
                                  block $label18
                                    local.get $var10
                                    i32.const 2
                                    i32.shr_u
                                    i32.const 3
                                    i32.and
                                    local.get $var7
                                    i32.add
                                    br_table $label18 $label19 $label20 $label21 $label18 $label22 $label19 $label20 $label21 $label18
                                  end $label18
                                  local.get $var3
                                  i32.const 16
                                  i32.add
                                  v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
                                  v128.store
                                  br $label23
                                end $label19
                                local.get $var3
                                i32.const 16
                                i32.add
                                local.get $var6
                                v128.load offset=4 align=1
                                local.get $var6
                                v128.load align=1
                                local.tee $var31
                                i32.const 4
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                local.tee $var31
                                i32.const 2
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                v128.and
                                local.tee $var32
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                i8x16.eq
                                local.tee $var31
                                i64x2.extract_lane 0
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var33
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                local.get $var33
                                i32.load8_u offset=38928
                                local.tee $var33
                                i8x16.splat
                                local.get $var31
                                i64x2.extract_lane 1
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var34
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                i8x16.add
                                i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                                i8x16.swizzle
                                local.get $var32
                                local.get $var31
                                v128.bitselect
                                v128.store
                                local.get $var33
                                local.get $var6
                                i32.const 4
                                i32.add
                                i32.add
                                local.get $var34
                                i32.load8_u offset=38928
                                i32.add
                                local.set $var6
                                br $label23
                              end $label20
                              local.get $var3
                              i32.const 16
                              i32.add
                              local.get $var6
                              v128.load offset=8 align=1
                              local.get $var6
                              v128.load align=1
                              local.tee $var31
                              i32.const 4
                              i16x8.shr_s
                              local.get $var31
                              i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              v128.and
                              local.tee $var32
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              i8x16.eq
                              local.tee $var31
                              i64x2.extract_lane 0
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var33
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              local.get $var33
                              i32.load8_u offset=38928
                              local.tee $var33
                              i8x16.splat
                              local.get $var31
                              i64x2.extract_lane 1
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var34
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              i8x16.add
                              i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                              i8x16.swizzle
                              local.get $var32
                              local.get $var31
                              v128.bitselect
                              v128.store
                              local.get $var33
                              local.get $var6
                              i32.const 8
                              i32.add
                              i32.add
                              local.get $var34
                              i32.load8_u offset=38928
                              i32.add
                              local.set $var6
                              br $label23
                            end $label21
                            local.get $var3
                            i32.const 16
                            i32.add
                            local.get $var6
                            v128.load align=1
                            v128.store
                            local.get $var6
                            i32.const 16
                            i32.add
                            local.set $var6
                            br $label23
                          end $label22
                          local.get $var3
                          i32.const 16
                          i32.add
                          local.get $var6
                          v128.load offset=2 align=1
                          local.get $var6
                          i32.load8_u
                          local.tee $var33
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          local.get $var33
                          i32.load8_u offset=38928
                          local.tee $var33
                          i8x16.splat
                          local.get $var6
                          i32.load8_u offset=1
                          local.tee $var34
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          i8x16.add
                          i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                          i8x16.swizzle
                          v128.store
                          local.get $var33
                          local.get $var6
                          i32.const 2
                          i32.add
                          i32.add
                          local.get $var34
                          i32.load8_u offset=38928
                          i32.add
                          local.set $var6
                        end $label23
                        block $label29
                          block $label28
                            block $label27
                              block $label26
                                block $label25
                                  block $label24
                                    local.get $var10
                                    i32.const 4
                                    i32.shr_u
                                    i32.const 3
                                    i32.and
                                    local.get $var7
                                    i32.add
                                    br_table $label24 $label25 $label26 $label27 $label24 $label28 $label25 $label26 $label27 $label24
                                  end $label24
                                  local.get $var3
                                  i32.const 32
                                  i32.add
                                  v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
                                  v128.store
                                  br $label29
                                end $label25
                                local.get $var3
                                i32.const 32
                                i32.add
                                local.get $var6
                                v128.load offset=4 align=1
                                local.get $var6
                                v128.load align=1
                                local.tee $var31
                                i32.const 4
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                local.tee $var31
                                i32.const 2
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                v128.and
                                local.tee $var32
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                i8x16.eq
                                local.tee $var31
                                i64x2.extract_lane 0
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var33
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                local.get $var33
                                i32.load8_u offset=38928
                                local.tee $var33
                                i8x16.splat
                                local.get $var31
                                i64x2.extract_lane 1
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var34
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                i8x16.add
                                i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                                i8x16.swizzle
                                local.get $var32
                                local.get $var31
                                v128.bitselect
                                v128.store
                                local.get $var33
                                local.get $var6
                                i32.const 4
                                i32.add
                                i32.add
                                local.get $var34
                                i32.load8_u offset=38928
                                i32.add
                                local.set $var6
                                br $label29
                              end $label26
                              local.get $var3
                              i32.const 32
                              i32.add
                              local.get $var6
                              v128.load offset=8 align=1
                              local.get $var6
                              v128.load align=1
                              local.tee $var31
                              i32.const 4
                              i16x8.shr_s
                              local.get $var31
                              i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              v128.and
                              local.tee $var32
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              i8x16.eq
                              local.tee $var31
                              i64x2.extract_lane 0
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var33
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              local.get $var33
                              i32.load8_u offset=38928
                              local.tee $var33
                              i8x16.splat
                              local.get $var31
                              i64x2.extract_lane 1
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var34
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              i8x16.add
                              i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                              i8x16.swizzle
                              local.get $var32
                              local.get $var31
                              v128.bitselect
                              v128.store
                              local.get $var33
                              local.get $var6
                              i32.const 8
                              i32.add
                              i32.add
                              local.get $var34
                              i32.load8_u offset=38928
                              i32.add
                              local.set $var6
                              br $label29
                            end $label27
                            local.get $var3
                            i32.const 32
                            i32.add
                            local.get $var6
                            v128.load align=1
                            v128.store
                            local.get $var6
                            i32.const 16
                            i32.add
                            local.set $var6
                            br $label29
                          end $label28
                          local.get $var3
                          i32.const 32
                          i32.add
                          local.get $var6
                          v128.load offset=2 align=1
                          local.get $var6
                          i32.load8_u
                          local.tee $var33
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          local.get $var33
                          i32.load8_u offset=38928
                          local.tee $var33
                          i8x16.splat
                          local.get $var6
                          i32.load8_u offset=1
                          local.tee $var34
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          i8x16.add
                          i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                          i8x16.swizzle
                          v128.store
                          local.get $var33
                          local.get $var6
                          i32.const 2
                          i32.add
                          i32.add
                          local.get $var34
                          i32.load8_u offset=38928
                          i32.add
                          local.set $var6
                        end $label29
                        block $label35
                          block $label34
                            block $label33
                              block $label32
                                block $label31
                                  block $label30
                                    local.get $var10
                                    i32.const 6
                                    i32.shr_u
                                    local.get $var7
                                    i32.add
                                    br_table $label30 $label31 $label32 $label33 $label30 $label34 $label31 $label32 $label33 $label30
                                  end $label30
                                  local.get $var3
                                  i32.const 48
                                  i32.add
                                  v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
                                  v128.store
                                  br $label35
                                end $label31
                                local.get $var3
                                i32.const 48
                                i32.add
                                local.get $var6
                                v128.load offset=4 align=1
                                local.get $var6
                                v128.load align=1
                                local.tee $var31
                                i32.const 4
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                local.tee $var31
                                i32.const 2
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                v128.and
                                local.tee $var32
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                i8x16.eq
                                local.tee $var31
                                i64x2.extract_lane 0
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var3
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                local.get $var3
                                i32.load8_u offset=38928
                                local.tee $var3
                                i8x16.splat
                                local.get $var31
                                i64x2.extract_lane 1
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var10
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                i8x16.add
                                i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                                i8x16.swizzle
                                local.get $var32
                                local.get $var31
                                v128.bitselect
                                v128.store
                                local.get $var3
                                local.get $var6
                                i32.const 4
                                i32.add
                                i32.add
                                local.get $var10
                                i32.load8_u offset=38928
                                i32.add
                                local.set $var6
                                br $label35
                              end $label32
                              local.get $var3
                              i32.const 48
                              i32.add
                              local.get $var6
                              v128.load offset=8 align=1
                              local.get $var6
                              v128.load align=1
                              local.tee $var31
                              i32.const 4
                              i16x8.shr_s
                              local.get $var31
                              i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              v128.and
                              local.tee $var32
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              i8x16.eq
                              local.tee $var31
                              i64x2.extract_lane 0
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var3
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              local.get $var3
                              i32.load8_u offset=38928
                              local.tee $var3
                              i8x16.splat
                              local.get $var31
                              i64x2.extract_lane 1
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var10
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              i8x16.add
                              i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                              i8x16.swizzle
                              local.get $var32
                              local.get $var31
                              v128.bitselect
                              v128.store
                              local.get $var3
                              local.get $var6
                              i32.const 8
                              i32.add
                              i32.add
                              local.get $var10
                              i32.load8_u offset=38928
                              i32.add
                              local.set $var6
                              br $label35
                            end $label33
                            local.get $var3
                            i32.const 48
                            i32.add
                            local.get $var6
                            v128.load align=1
                            v128.store
                            local.get $var6
                            i32.const 16
                            i32.add
                            local.set $var6
                            br $label35
                          end $label34
                          local.get $var3
                          i32.const 48
                          i32.add
                          local.get $var6
                          v128.load offset=2 align=1
                          local.get $var6
                          i32.load8_u
                          local.tee $var3
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          local.get $var3
                          i32.load8_u offset=38928
                          local.tee $var3
                          i8x16.splat
                          local.get $var6
                          i32.load8_u offset=1
                          local.tee $var10
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          i8x16.add
                          i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                          i8x16.swizzle
                          v128.store
                          local.get $var3
                          local.get $var6
                          i32.const 2
                          i32.add
                          i32.add
                          local.get $var10
                          i32.load8_u offset=38928
                          i32.add
                          local.set $var6
                        end $label35
                        local.get $var4
                        i32.const 64
                        i32.add
                        local.set $var3
                        local.get $var4
                        i32.const 128
                        i32.add
                        local.get $var22
                        i32.gt_u
                        br_if $label11
                        local.get $var3
                        local.set $var4
                        local.get $var12
                        local.get $var6
                        i32.sub
                        i32.const 95
                        i32.gt_u
                        br_if $label36
                      end $label36
                    end $label11
                    block $label37
                      local.get $var3
                      local.get $var22
                      i32.ge_u
                      br_if $label37
                      local.get $var3
                      i32.const 3
                      i32.shr_u
                      local.set $var4
                      loop $label44
                        local.get $var12
                        local.get $var6
                        i32.sub
                        i32.const 24
                        i32.lt_u
                        br_if $label4
                        local.get $var30
                        local.get $var3
                        i32.add
                        local.set $var10
                        block $label43
                          block $label42
                            block $label41
                              block $label40
                                block $label39
                                  block $label38
                                    local.get $var19
                                    local.get $var3
                                    i32.const 6
                                    i32.shr_u
                                    i32.add
                                    i32.load8_u
                                    local.get $var4
                                    i32.const 6
                                    i32.and
                                    i32.shr_u
                                    i32.const 3
                                    i32.and
                                    local.get $var7
                                    i32.add
                                    br_table $label38 $label39 $label40 $label41 $label38 $label42 $label39 $label40 $label41 $label38
                                  end $label38
                                  local.get $var10
                                  v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
                                  v128.store align=1
                                  br $label43
                                end $label39
                                local.get $var10
                                local.get $var6
                                v128.load offset=4 align=1
                                local.get $var6
                                v128.load align=1
                                local.tee $var31
                                i32.const 4
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                local.tee $var31
                                i32.const 2
                                i16x8.shr_s
                                local.get $var31
                                i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                v128.and
                                local.tee $var32
                                v128.const i32x4 0x03030303 0x03030303 0x03030303 0x03030303
                                i8x16.eq
                                local.tee $var31
                                i64x2.extract_lane 0
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var33
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                local.get $var33
                                i32.load8_u offset=38928
                                local.tee $var33
                                i8x16.splat
                                local.get $var31
                                i64x2.extract_lane 1
                                i64.const 284803830071168
                                i64.mul
                                i64.const 56
                                i64.shr_u
                                i32.wrap_i64
                                local.tee $var34
                                i32.const 3
                                i32.shl
                                v128.load offset=36880 align=8
                                i8x16.add
                                i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                                i8x16.swizzle
                                local.get $var32
                                local.get $var31
                                v128.bitselect
                                v128.store align=1
                                local.get $var33
                                local.get $var6
                                i32.const 4
                                i32.add
                                i32.add
                                local.get $var34
                                i32.load8_u offset=38928
                                i32.add
                                local.set $var6
                                br $label43
                              end $label40
                              local.get $var10
                              local.get $var6
                              v128.load offset=8 align=1
                              local.get $var6
                              v128.load align=1
                              local.tee $var31
                              i32.const 4
                              i16x8.shr_s
                              local.get $var31
                              i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              v128.and
                              local.tee $var32
                              v128.const i32x4 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F 0x0F0F0F0F
                              i8x16.eq
                              local.tee $var31
                              i64x2.extract_lane 0
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var33
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              local.get $var33
                              i32.load8_u offset=38928
                              local.tee $var33
                              i8x16.splat
                              local.get $var31
                              i64x2.extract_lane 1
                              i64.const 284803830071168
                              i64.mul
                              i64.const 56
                              i64.shr_u
                              i32.wrap_i64
                              local.tee $var34
                              i32.const 3
                              i32.shl
                              v128.load offset=36880 align=8
                              i8x16.add
                              i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                              i8x16.swizzle
                              local.get $var32
                              local.get $var31
                              v128.bitselect
                              v128.store align=1
                              local.get $var33
                              local.get $var6
                              i32.const 8
                              i32.add
                              i32.add
                              local.get $var34
                              i32.load8_u offset=38928
                              i32.add
                              local.set $var6
                              br $label43
                            end $label41
                            local.get $var10
                            local.get $var6
                            v128.load align=1
                            v128.store align=1
                            local.get $var6
                            i32.const 16
                            i32.add
                            local.set $var6
                            br $label43
                          end $label42
                          local.get $var10
                          local.get $var6
                          v128.load offset=2 align=1
                          local.get $var6
                          i32.load8_u
                          local.tee $var33
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          local.get $var33
                          i32.load8_u offset=38928
                          local.tee $var33
                          i8x16.splat
                          local.get $var6
                          i32.load8_u offset=1
                          local.tee $var34
                          i32.const 3
                          i32.shl
                          v128.load offset=36880 align=8
                          i8x16.add
                          i8x16.shuffle 0 1 2 3 4 5 6 7 16 17 18 19 20 21 22 23
                          i8x16.swizzle
                          v128.store align=1
                          local.get $var33
                          local.get $var6
                          i32.const 2
                          i32.add
                          i32.add
                          local.get $var34
                          i32.load8_u offset=38928
                          i32.add
                          local.set $var6
                        end $label43
                        local.get $var4
                        i32.const 2
                        i32.add
                        local.set $var4
                        local.get $var3
                        i32.const 16
                        i32.add
                        local.tee $var3
                        local.get $var22
                        i32.lt_u
                        br_if $label44
                      end $label44
                    end $label37
                    local.get $var6
                    local.set $var19
                    local.get $var6
                    i32.eqz
                    br_if $label4
                  end $label10
                  local.get $var30
                  local.get $var22
                  i32.add
                  local.set $var30
                  local.get $var29
                  i32.const 1
                  i32.add
                  local.tee $var29
                  i32.const 4
                  i32.ne
                  br_if $label45
                end $label45
                block $label49
                  block $label48
                    block $label47
                      block $label46
                        local.get $var8
                        i32.eqz
                        br_if $label46
                        local.get $var16
                        local.get $var26
                        i32.const 2
                        i32.shr_u
                        i32.add
                        i32.load8_u
                        local.tee $var4
                        i32.const 3
                        i32.and
                        br_table $label46 $label47 $label48 $label4 $label46
                      end $label46
                      local.get $var22
                      i32.eqz
                      br_if $label49
                      local.get $var5
                      i32.const 256
                      i32.add
                      local.get $var26
                      i32.add
                      local.set $var4
                      local.get $var5
                      local.get $var26
                      i32.add
                      v128.load align=4
                      local.set $var35
                      i32.const 0
                      local.set $var6
                      loop $label50
                        local.get $var4
                        local.get $var5
                        i32.const 8448
                        i32.add
                        local.get $var6
                        i32.add
                        v128.load
                        local.tee $var36
                        local.get $var25
                        local.get $var6
                        i32.add
                        v128.load
                        local.tee $var37
                        i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                        local.tee $var38
                        local.get $var23
                        local.get $var6
                        i32.add
                        v128.load
                        local.tee $var39
                        local.get $var24
                        local.get $var6
                        i32.add
                        v128.load
                        local.tee $var40
                        i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                        local.tee $var41
                        i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                        local.tee $var31
                        i32.const 1
                        i8x16.shr_u
                        local.get $var31
                        v128.const i32x4 0x01010101 0x01010101 0x01010101 0x01010101
                        local.tee $var32
                        v128.and
                        i8x16.neg
                        v128.xor
                        local.tee $var31
                        local.get $var35
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var38
                        local.get $var41
                        i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                        local.tee $var31
                        i32.const 1
                        i8x16.shr_u
                        local.get $var31
                        local.get $var32
                        v128.and
                        i8x16.neg
                        v128.xor
                        local.tee $var31
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var36
                        local.get $var37
                        i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                        local.tee $var36
                        local.get $var39
                        local.get $var40
                        i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                        local.tee $var37
                        i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                        local.tee $var31
                        i32.const 1
                        i8x16.shr_u
                        local.get $var31
                        local.get $var32
                        v128.and
                        i8x16.neg
                        v128.xor
                        local.tee $var31
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var35
                        local.get $var36
                        local.get $var37
                        i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                        local.tee $var31
                        i32.const 1
                        i8x16.shr_u
                        local.get $var31
                        local.get $var32
                        v128.and
                        i8x16.neg
                        v128.xor
                        local.tee $var31
                        i8x16.add
                        local.tee $var32
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var32
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                        i8x16.add
                        local.tee $var32
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var32
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                        i8x16.add
                        local.tee $var32
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.tee $var4
                        local.get $var32
                        local.get $var31
                        local.get $var31
                        i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                        i8x16.add
                        local.tee $var35
                        v128.store32_lane align=1 0
                        local.get $var4
                        local.get $var2
                        i32.add
                        local.set $var4
                        local.get $var6
                        i32.const 16
                        i32.add
                        local.tee $var6
                        local.get $var22
                        i32.lt_u
                        br_if $label50
                        br $label49
                      end $label50
                    end $label47
                    local.get $var22
                    i32.eqz
                    br_if $label49
                    local.get $var5
                    i32.const 256
                    i32.add
                    local.get $var26
                    i32.add
                    local.set $var4
                    local.get $var5
                    local.get $var26
                    i32.add
                    v128.load align=4
                    local.set $var35
                    i32.const 0
                    local.set $var6
                    loop $label51
                      local.get $var4
                      local.get $var5
                      i32.const 8448
                      i32.add
                      local.get $var6
                      i32.add
                      v128.load
                      local.tee $var36
                      local.get $var25
                      local.get $var6
                      i32.add
                      v128.load
                      local.tee $var37
                      i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                      local.tee $var38
                      local.get $var23
                      local.get $var6
                      i32.add
                      v128.load
                      local.tee $var39
                      local.get $var24
                      local.get $var6
                      i32.add
                      v128.load
                      local.tee $var40
                      i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                      local.tee $var41
                      i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                      local.tee $var31
                      i32.const 1
                      i16x8.shr_u
                      local.get $var31
                      v128.const i32x4 0x00010001 0x00010001 0x00010001 0x00010001
                      local.tee $var32
                      v128.and
                      i16x8.neg
                      v128.xor
                      local.tee $var31
                      local.get $var35
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var38
                      local.get $var41
                      i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                      local.tee $var31
                      i32.const 1
                      i16x8.shr_u
                      local.get $var31
                      local.get $var32
                      v128.and
                      i16x8.neg
                      v128.xor
                      local.tee $var31
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var36
                      local.get $var37
                      i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                      local.tee $var36
                      local.get $var39
                      local.get $var40
                      i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                      local.tee $var37
                      i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                      local.tee $var31
                      i32.const 1
                      i16x8.shr_u
                      local.get $var31
                      local.get $var32
                      v128.and
                      i16x8.neg
                      v128.xor
                      local.tee $var31
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var35
                      local.get $var36
                      local.get $var37
                      i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                      local.tee $var31
                      i32.const 1
                      i16x8.shr_u
                      local.get $var31
                      local.get $var32
                      v128.and
                      i16x8.neg
                      v128.xor
                      local.tee $var31
                      i16x8.add
                      local.tee $var32
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var32
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                      i16x8.add
                      local.tee $var32
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var32
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                      i16x8.add
                      local.tee $var32
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.tee $var4
                      local.get $var32
                      local.get $var31
                      local.get $var31
                      i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                      i16x8.add
                      local.tee $var35
                      v128.store32_lane align=1 0
                      local.get $var4
                      local.get $var2
                      i32.add
                      local.set $var4
                      local.get $var6
                      i32.const 16
                      i32.add
                      local.tee $var6
                      local.get $var22
                      i32.lt_u
                      br_if $label51
                      br $label49
                    end $label51
                  end $label48
                  local.get $var22
                  i32.eqz
                  br_if $label49
                  i32.const 0
                  local.set $var6
                  i32.const 0
                  local.get $var4
                  i32.const 4
                  i32.shr_u
                  local.tee $var4
                  i32.sub
                  i32.const 31
                  i32.and
                  local.set $var3
                  local.get $var5
                  i32.const 256
                  i32.add
                  local.get $var26
                  i32.add
                  local.set $var7
                  local.get $var5
                  local.get $var26
                  i32.add
                  v128.load align=4
                  local.set $var32
                  loop $label52
                    local.get $var7
                    local.get $var5
                    i32.const 8448
                    i32.add
                    local.get $var6
                    i32.add
                    v128.load
                    local.tee $var35
                    local.get $var25
                    local.get $var6
                    i32.add
                    v128.load
                    local.tee $var36
                    i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                    local.tee $var37
                    local.get $var23
                    local.get $var6
                    i32.add
                    v128.load
                    local.tee $var38
                    local.get $var24
                    local.get $var6
                    i32.add
                    v128.load
                    local.tee $var39
                    i8x16.shuffle 0 16 1 17 2 18 3 19 4 20 5 21 6 22 7 23
                    local.tee $var40
                    i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                    local.tee $var31
                    local.get $var3
                    i32x4.shl
                    local.get $var31
                    local.get $var4
                    i32x4.shr_u
                    v128.or
                    local.tee $var31
                    local.get $var32
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var37
                    local.get $var40
                    i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                    local.tee $var31
                    local.get $var3
                    i32x4.shl
                    local.get $var31
                    local.get $var4
                    i32x4.shr_u
                    v128.or
                    local.tee $var31
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var35
                    local.get $var36
                    i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                    local.tee $var35
                    local.get $var38
                    local.get $var39
                    i8x16.shuffle 8 24 9 25 10 26 11 27 12 28 13 29 14 30 15 31
                    local.tee $var36
                    i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
                    local.tee $var31
                    local.get $var3
                    i32x4.shl
                    local.get $var31
                    local.get $var4
                    i32x4.shr_u
                    v128.or
                    local.tee $var31
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var35
                    local.get $var36
                    i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
                    local.tee $var31
                    local.get $var3
                    i32x4.shl
                    local.get $var31
                    local.get $var4
                    i32x4.shr_u
                    v128.or
                    local.tee $var31
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 4 5 6 7 4 5 6 7 4 5 6 7 4 5 6 7
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 8 9 10 11 8 9 10 11 8 9 10 11 8 9 10 11
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.tee $var7
                    local.get $var32
                    local.get $var31
                    local.get $var31
                    i8x16.shuffle 12 13 14 15 12 13 14 15 12 13 14 15 12 13 14 15
                    v128.xor
                    local.tee $var32
                    v128.store32_lane align=1 0
                    local.get $var7
                    local.get $var2
                    i32.add
                    local.set $var7
                    local.get $var6
                    i32.const 16
                    i32.add
                    local.tee $var6
                    local.get $var22
                    i32.lt_u
                    br_if $label52
                  end $label52
                end $label49
                local.get $var26
                i32.const 4
                i32.add
                local.tee $var26
                local.get $var2
                i32.lt_u
                br_if $label53
              end $label53
              block $label54
                local.get $var20
                local.get $var2
                i32.mul
                local.tee $var6
                i32.eqz
                br_if $label54
                local.get $var18
                local.get $var5
                i32.const 256
                i32.add
                local.get $var6
                memory.copy
              end $label54
              block $label55
                local.get $var13
                br_if $label55
                local.get $var5
                local.get $var5
                i32.const 256
                i32.add
                local.get $var20
                i32.const -1
                i32.add
                local.get $var2
                i32.mul
                i32.add
                local.get $var2
                memory.copy
              end $label55
              local.get $var20
              local.get $var17
              i32.add
              local.set $var17
              i32.const -2
              local.set $var6
              local.get $var19
              local.set $var14
              local.get $var19
              br_if $label56
              br $label0
            end $label56
          end $label2
          local.get $var1
          i32.eqz
          br_if $label3
          local.get $var9
          local.get $var4
          i32.add
          local.set $var7
          i32.const 0
          local.set $var6
          i32.const -1
          local.set $var4
          loop $label57
            local.get $var7
            local.get $var4
            local.get $var9
            i32.sub
            local.tee $var4
            i32.add
            local.get $var9
            i32.lt_u
            br_if $label4
            local.get $var15
            local.get $var1
            local.get $var6
            i32.sub
            local.get $var6
            local.get $var15
            i32.add
            local.get $var1
            i32.lt_u
            select
            local.get $var6
            i32.add
            local.tee $var6
            local.get $var1
            i32.lt_u
            br_if $label57
          end $label57
          local.get $var3
          local.get $var4
          i32.sub
          local.set $var14
        end $label3
        i32.const 0
        i32.const -3
        local.get $var12
        local.get $var14
        i32.sub
        local.get $var11
        i32.eq
        select
        local.set $var6
        br $label0
      end $label4
      i32.const -2
      local.set $var6
    end $label0
    local.get $var5
    i32.const 9472
    i32.add
    global.set $global0
    local.get $var6
  )
  (func $func3
    call $func1
  )
  (func $meshopt_decodeIndexBuffer (;4;) (export "meshopt_decodeIndexBuffer") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (result i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    (local $var10 i32)
    (local $var11 i32)
    (local $var12 i32)
    (local $var13 i32)
    (local $var14 i32)
    (local $var15 i32)
    (local $var16 i32)
    (local $var17 i32)
    (local $var18 i32)
    (local $var19 i32)
    (local $var20 i32)
    global.get $global0
    i32.const 192
    i32.sub
    local.tee $var5
    global.set $global0
    i32.const -2
    local.set $var6
    block $label0
      local.get $var4
      local.get $var1
      i32.const 3
      i32.div_u
      local.tee $var7
      i32.const 17
      i32.add
      i32.lt_u
      br_if $label0
      i32.const -1
      local.set $var6
      local.get $var3
      i32.load8_u
      local.tee $var8
      i32.const 240
      i32.and
      i32.const 224
      i32.ne
      br_if $label0
      local.get $var8
      i32.const 15
      i32.and
      local.tee $var9
      i32.const 1
      i32.gt_u
      br_if $label0
      local.get $var5
      i32.const 64
      i32.add
      i32.const 255
      i32.const 128
      memory.fill
      local.get $var5
      i64.const -1
      i64.store offset=56
      local.get $var5
      i64.const -1
      i64.store offset=48
      local.get $var5
      i64.const -1
      i64.store offset=40
      local.get $var5
      i64.const -1
      i64.store offset=32
      local.get $var5
      i64.const -1
      i64.store offset=24
      local.get $var5
      i64.const -1
      i64.store offset=16
      local.get $var5
      i64.const -1
      i64.store offset=8
      local.get $var5
      i64.const -1
      i64.store
      local.get $var3
      local.get $var4
      i32.add
      i32.const -16
      i32.add
      local.set $var10
      local.get $var3
      i32.const 1
      i32.add
      local.tee $var8
      local.get $var7
      i32.add
      local.set $var4
      block $label1
        local.get $var1
        i32.eqz
        br_if $label1
        i32.const 13
        i32.const 15
        local.get $var9
        i32.const 1
        i32.eq
        select
        local.set $var11
        i32.const 0
        local.set $var12
        i32.const 0
        local.set $var13
        i32.const 0
        local.set $var7
        i32.const 0
        local.set $var3
        i32.const 0
        local.set $var6
        loop $label38
          block $label2
            local.get $var4
            local.get $var10
            i32.le_u
            br_if $label2
            i32.const -2
            local.set $var6
            br $label0
          end $label2
          block $label13
            block $label3
              local.get $var8
              i32.load8_u
              local.tee $var9
              i32.const 239
              i32.gt_u
              br_if $label3
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              local.get $var9
              i32.const -1
              i32.xor
              local.tee $var14
              i32.const 4
              i32.shr_u
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var15
              i32.load offset=4
              local.set $var16
              local.get $var15
              i32.load
              local.set $var17
              block $label5
                block $label4
                  local.get $var9
                  i32.const 15
                  i32.and
                  local.tee $var15
                  local.get $var11
                  i32.ge_u
                  br_if $label4
                  local.get $var5
                  local.get $var3
                  local.get $var14
                  i32.add
                  i32.const 15
                  i32.and
                  i32.const 2
                  i32.shl
                  i32.add
                  i32.load
                  local.get $var12
                  local.get $var15
                  select
                  local.set $var9
                  local.get $var12
                  local.get $var15
                  i32.eqz
                  local.tee $var18
                  i32.add
                  local.set $var12
                  br $label5
                end $label4
                block $label7
                  block $label6
                    local.get $var15
                    i32.const 15
                    i32.eq
                    br_if $label6
                    i32.const 1
                    local.set $var18
                    local.get $var15
                    i32.const -4
                    i32.xor
                    local.get $var15
                    local.get $var13
                    i32.add
                    i32.add
                    i32.const 1
                    i32.add
                    local.set $var9
                    br $label7
                  end $label6
                  local.get $var4
                  i32.const 1
                  i32.add
                  local.set $var9
                  local.get $var4
                  i32.load8_s
                  local.tee $var15
                  i32.const 255
                  i32.and
                  local.set $var14
                  block $label9
                    block $label8
                      local.get $var15
                      i32.const -1
                      i32.le_s
                      br_if $label8
                      local.get $var9
                      local.set $var4
                      br $label9
                    end $label8
                    local.get $var4
                    i32.const 5
                    i32.add
                    local.set $var4
                    local.get $var14
                    i32.const 127
                    i32.and
                    local.set $var14
                    i32.const 7
                    local.set $var15
                    block $label10
                      loop $label11
                        local.get $var9
                        i32.load8_s
                        local.tee $var18
                        i32.const 127
                        i32.and
                        local.get $var15
                        i32.shl
                        local.get $var14
                        i32.or
                        local.set $var14
                        local.get $var18
                        i32.const -1
                        i32.gt_s
                        br_if $label10
                        local.get $var9
                        i32.const 1
                        i32.add
                        local.set $var9
                        local.get $var15
                        i32.const 7
                        i32.add
                        local.tee $var15
                        i32.const 35
                        i32.ne
                        br_if $label11
                        br $label9
                      end $label11
                    end $label10
                    local.get $var9
                    i32.const 1
                    i32.add
                    local.set $var4
                  end $label9
                  i32.const 1
                  local.set $var18
                  local.get $var14
                  i32.const 1
                  i32.shr_u
                  i32.const 0
                  local.get $var14
                  i32.const 1
                  i32.and
                  i32.sub
                  i32.xor
                  local.get $var13
                  i32.add
                  local.set $var9
                end $label7
                local.get $var9
                local.set $var13
              end $label5
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              i32.const 3
              i32.shl
              i32.add
              local.tee $var15
              local.get $var9
              i32.store
              local.get $var15
              local.get $var16
              i32.store offset=4
              local.get $var5
              local.get $var3
              i32.const 2
              i32.shl
              i32.add
              local.get $var9
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              i32.const 1
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var15
              local.get $var17
              i32.store
              local.get $var15
              local.get $var9
              i32.store offset=4
              local.get $var6
              i32.const 2
              i32.add
              local.set $var6
              local.get $var18
              local.get $var3
              i32.add
              local.set $var3
              block $label12
                local.get $var2
                i32.const 2
                i32.ne
                br_if $label12
                local.get $var0
                local.get $var7
                i32.const 1
                i32.shl
                i32.add
                local.tee $var15
                local.get $var17
                i32.store16
                local.get $var15
                i32.const 4
                i32.add
                local.get $var9
                i32.store16
                local.get $var15
                i32.const 2
                i32.add
                local.get $var16
                i32.store16
                br $label13
              end $label12
              local.get $var0
              local.get $var7
              i32.const 2
              i32.shl
              i32.add
              local.tee $var15
              local.get $var17
              i32.store
              local.get $var15
              i32.const 8
              i32.add
              local.get $var9
              i32.store
              local.get $var15
              i32.const 4
              i32.add
              local.get $var16
              i32.store
              br $label13
            end $label3
            block $label14
              local.get $var9
              i32.const 253
              i32.gt_u
              br_if $label14
              local.get $var5
              local.get $var3
              local.get $var10
              local.get $var9
              i32.const 15
              i32.and
              i32.add
              i32.load8_u
              local.tee $var15
              i32.const 4
              i32.shr_u
              local.tee $var14
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.get $var12
              i32.const 1
              i32.add
              local.tee $var18
              local.get $var14
              select
              local.set $var9
              local.get $var5
              local.get $var3
              local.get $var15
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.get $var18
              local.get $var14
              i32.eqz
              local.tee $var16
              i32.add
              local.tee $var18
              local.get $var15
              i32.const 15
              i32.and
              local.tee $var14
              select
              local.set $var15
              local.get $var14
              i32.eqz
              local.set $var14
              block $label16
                block $label15
                  local.get $var2
                  i32.const 2
                  i32.ne
                  br_if $label15
                  local.get $var0
                  local.get $var7
                  i32.const 1
                  i32.shl
                  i32.add
                  local.tee $var17
                  local.get $var12
                  i32.store16
                  local.get $var17
                  i32.const 4
                  i32.add
                  local.get $var15
                  i32.store16
                  local.get $var17
                  i32.const 2
                  i32.add
                  local.get $var9
                  i32.store16
                  br $label16
                end $label15
                local.get $var0
                local.get $var7
                i32.const 2
                i32.shl
                i32.add
                local.tee $var17
                local.get $var12
                i32.store
                local.get $var17
                i32.const 8
                i32.add
                local.get $var15
                i32.store
                local.get $var17
                i32.const 4
                i32.add
                local.get $var9
                i32.store
              end $label16
              local.get $var5
              local.get $var3
              i32.const 2
              i32.shl
              i32.add
              local.get $var12
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              i32.const 3
              i32.shl
              i32.add
              local.tee $var17
              local.get $var9
              i32.store
              local.get $var17
              local.get $var12
              i32.store offset=4
              local.get $var5
              local.get $var3
              i32.const 1
              i32.add
              local.tee $var3
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              local.get $var9
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              i32.const 1
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var17
              local.get $var15
              i32.store
              local.get $var17
              local.get $var9
              i32.store offset=4
              local.get $var5
              local.get $var3
              local.get $var16
              i32.add
              local.tee $var3
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              local.get $var15
              i32.store
              local.get $var5
              i32.const 64
              i32.add
              local.get $var6
              i32.const 2
              i32.add
              i32.const 15
              i32.and
              i32.const 3
              i32.shl
              i32.add
              local.tee $var9
              local.get $var12
              i32.store
              local.get $var9
              local.get $var15
              i32.store offset=4
              local.get $var6
              i32.const 3
              i32.add
              local.set $var6
              local.get $var3
              local.get $var14
              i32.add
              local.set $var3
              local.get $var18
              local.get $var14
              i32.add
              local.set $var12
              br $label13
            end $label14
            local.get $var12
            i32.const 0
            local.get $var4
            i32.load8_u
            local.tee $var15
            select
            local.tee $var17
            local.get $var9
            i32.const 254
            i32.eq
            local.tee $var9
            i32.add
            local.set $var18
            local.get $var15
            i32.const 15
            i32.and
            local.set $var19
            block $label18
              block $label17
                local.get $var15
                i32.const 4
                i32.shr_u
                local.tee $var20
                br_if $label17
                local.get $var18
                i32.const 1
                i32.add
                local.set $var16
                br $label18
              end $label17
              local.get $var18
              local.set $var16
              local.get $var5
              local.get $var3
              local.get $var20
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.set $var18
            end $label18
            block $label20
              block $label19
                local.get $var19
                br_if $label19
                local.get $var16
                i32.const 1
                i32.add
                local.set $var12
                br $label20
              end $label19
              local.get $var16
              local.set $var12
              local.get $var5
              local.get $var3
              local.get $var15
              i32.sub
              i32.const 15
              i32.and
              i32.const 2
              i32.shl
              i32.add
              i32.load
              local.set $var16
            end $label20
            block $label22
              block $label21
                local.get $var9
                i32.eqz
                br_if $label21
                local.get $var4
                i32.const 1
                i32.add
                local.set $var9
                br $label22
              end $label21
              local.get $var4
              i32.const 2
              i32.add
              local.set $var9
              local.get $var4
              i32.load8_s offset=1
              local.tee $var14
              i32.const 255
              i32.and
              local.set $var15
              block $label23
                local.get $var14
                i32.const -1
                i32.gt_s
                br_if $label23
                local.get $var4
                i32.const 6
                i32.add
                local.set $var17
                local.get $var15
                i32.const 127
                i32.and
                local.set $var15
                i32.const 7
                local.set $var4
                block $label24
                  loop $label25
                    local.get $var9
                    i32.load8_s
                    local.tee $var14
                    i32.const 127
                    i32.and
                    local.get $var4
                    i32.shl
                    local.get $var15
                    i32.or
                    local.set $var15
                    local.get $var14
                    i32.const -1
                    i32.gt_s
                    br_if $label24
                    local.get $var9
                    i32.const 1
                    i32.add
                    local.set $var9
                    local.get $var4
                    i32.const 7
                    i32.add
                    local.tee $var4
                    i32.const 35
                    i32.ne
                    br_if $label25
                  end $label25
                  local.get $var17
                  local.set $var9
                  br $label23
                end $label24
                local.get $var9
                i32.const 1
                i32.add
                local.set $var9
              end $label23
              local.get $var15
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var15
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var17
            end $label22
            block $label27
              block $label26
                local.get $var20
                i32.const 15
                i32.eq
                br_if $label26
                local.get $var9
                local.set $var15
                br $label27
              end $label26
              local.get $var9
              i32.const 1
              i32.add
              local.set $var15
              local.get $var9
              i32.load8_s
              local.tee $var4
              i32.const 255
              i32.and
              local.set $var14
              block $label28
                local.get $var4
                i32.const -1
                i32.gt_s
                br_if $label28
                local.get $var9
                i32.const 5
                i32.add
                local.set $var18
                local.get $var14
                i32.const 127
                i32.and
                local.set $var14
                i32.const 7
                local.set $var4
                block $label29
                  loop $label30
                    local.get $var15
                    i32.load8_s
                    local.tee $var9
                    i32.const 127
                    i32.and
                    local.get $var4
                    i32.shl
                    local.get $var14
                    i32.or
                    local.set $var14
                    local.get $var9
                    i32.const -1
                    i32.gt_s
                    br_if $label29
                    local.get $var15
                    i32.const 1
                    i32.add
                    local.set $var15
                    local.get $var4
                    i32.const 7
                    i32.add
                    local.tee $var4
                    i32.const 35
                    i32.ne
                    br_if $label30
                  end $label30
                  local.get $var18
                  local.set $var15
                  br $label28
                end $label29
                local.get $var15
                i32.const 1
                i32.add
                local.set $var15
              end $label28
              local.get $var14
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var14
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var18
            end $label27
            block $label32
              block $label31
                local.get $var19
                i32.const 15
                i32.eq
                br_if $label31
                local.get $var15
                local.set $var4
                br $label32
              end $label31
              local.get $var15
              i32.const 1
              i32.add
              local.set $var4
              local.get $var15
              i32.load8_s
              local.tee $var9
              i32.const 255
              i32.and
              local.set $var14
              block $label33
                local.get $var9
                i32.const -1
                i32.gt_s
                br_if $label33
                local.get $var15
                i32.const 5
                i32.add
                local.set $var16
                local.get $var14
                i32.const 127
                i32.and
                local.set $var14
                i32.const 7
                local.set $var9
                block $label34
                  loop $label35
                    local.get $var4
                    i32.load8_s
                    local.tee $var15
                    i32.const 127
                    i32.and
                    local.get $var9
                    i32.shl
                    local.get $var14
                    i32.or
                    local.set $var14
                    local.get $var15
                    i32.const -1
                    i32.gt_s
                    br_if $label34
                    local.get $var4
                    i32.const 1
                    i32.add
                    local.set $var4
                    local.get $var9
                    i32.const 7
                    i32.add
                    local.tee $var9
                    i32.const 35
                    i32.ne
                    br_if $label35
                  end $label35
                  local.get $var16
                  local.set $var4
                  br $label33
                end $label34
                local.get $var4
                i32.const 1
                i32.add
                local.set $var4
              end $label33
              local.get $var14
              i32.const 1
              i32.shr_u
              i32.const 0
              local.get $var14
              i32.const 1
              i32.and
              i32.sub
              i32.xor
              local.get $var13
              i32.add
              local.tee $var13
              local.set $var16
            end $label32
            block $label37
              block $label36
                local.get $var2
                i32.const 2
                i32.ne
                br_if $label36
                local.get $var0
                local.get $var7
                i32.const 1
                i32.shl
                i32.add
                local.tee $var9
                local.get $var17
                i32.store16
                local.get $var9
                i32.const 4
                i32.add
                local.get $var16
                i32.store16
                local.get $var9
                i32.const 2
                i32.add
                local.get $var18
                i32.store16
                br $label37
              end $label36
              local.get $var0
              local.get $var7
              i32.const 2
              i32.shl
              i32.add
              local.tee $var9
              local.get $var17
              i32.store
              local.get $var9
              i32.const 8
              i32.add
              local.get $var16
              i32.store
              local.get $var9
              i32.const 4
              i32.add
              local.get $var18
              i32.store
            end $label37
            local.get $var5
            i32.const 64
            i32.add
            local.get $var6
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var18
            i32.store
            local.get $var9
            local.get $var17
            i32.store offset=4
            local.get $var5
            local.get $var3
            i32.const 2
            i32.shl
            i32.add
            local.get $var17
            i32.store
            local.get $var5
            i32.const 64
            i32.add
            local.get $var6
            i32.const 1
            i32.add
            i32.const 15
            i32.and
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var16
            i32.store
            local.get $var9
            local.get $var18
            i32.store offset=4
            local.get $var5
            local.get $var3
            i32.const 1
            i32.add
            local.tee $var3
            i32.const 15
            i32.and
            i32.const 2
            i32.shl
            i32.add
            local.get $var18
            i32.store
            local.get $var5
            i32.const 64
            i32.add
            local.get $var6
            i32.const 2
            i32.add
            i32.const 15
            i32.and
            i32.const 3
            i32.shl
            i32.add
            local.tee $var9
            local.get $var17
            i32.store
            local.get $var9
            local.get $var16
            i32.store offset=4
            local.get $var5
            local.get $var3
            local.get $var20
            i32.eqz
            local.get $var20
            i32.const 15
            i32.eq
            i32.or
            i32.add
            local.tee $var3
            i32.const 15
            i32.and
            i32.const 2
            i32.shl
            i32.add
            local.get $var16
            i32.store
            local.get $var3
            local.get $var19
            i32.eqz
            local.get $var19
            i32.const 15
            i32.eq
            i32.or
            i32.add
            local.set $var3
            local.get $var6
            i32.const 3
            i32.add
            local.set $var6
          end $label13
          local.get $var8
          i32.const 1
          i32.add
          local.set $var8
          local.get $var6
          i32.const 15
          i32.and
          local.set $var6
          local.get $var3
          i32.const 15
          i32.and
          local.set $var3
          local.get $var7
          i32.const 3
          i32.add
          local.tee $var7
          local.get $var1
          i32.lt_u
          br_if $label38
        end $label38
      end $label1
      i32.const 0
      i32.const -3
      local.get $var4
      local.get $var10
      i32.eq
      select
      local.set $var6
    end $label0
    local.get $var5
    i32.const 192
    i32.add
    global.set $global0
    local.get $var6
  )
  (func $meshopt_decodeIndexSequence (;5;) (export "meshopt_decodeIndexSequence") (param $var0 i32) (param $var1 i32) (param $var2 i32) (param $var3 i32) (param $var4 i32) (result i32)
    (local $var5 i32)
    (local $var6 i32)
    (local $var7 i32)
    (local $var8 i32)
    (local $var9 i32)
    global.get $global0
    i32.const 16
    i32.sub
    local.set $var5
    block $label0
      local.get $var4
      local.get $var1
      i32.const 5
      i32.add
      i32.ge_u
      br_if $label0
      i32.const -2
      return
    end $label0
    block $label1
      local.get $var3
      i32.load8_u
      i32.const 254
      i32.and
      i32.const 208
      i32.eq
      br_if $label1
      i32.const -1
      return
    end $label1
    local.get $var5
    i64.const 0
    i64.store offset=8
    local.get $var3
    i32.const 1
    i32.add
    local.set $var6
    local.get $var3
    local.get $var4
    i32.add
    i32.const -4
    i32.add
    local.set $var7
    block $label2
      local.get $var1
      i32.eqz
      br_if $label2
      block $label3
        local.get $var2
        i32.const 2
        i32.eq
        br_if $label3
        i32.const 0
        local.set $var8
        loop $label9
          block $label4
            local.get $var6
            local.get $var7
            i32.lt_u
            br_if $label4
            i32.const -2
            return
          end $label4
          local.get $var6
          i32.const 1
          i32.add
          local.set $var4
          local.get $var6
          i32.load8_s
          local.tee $var3
          i32.const 255
          i32.and
          local.set $var2
          block $label6
            block $label5
              local.get $var3
              i32.const -1
              i32.le_s
              br_if $label5
              local.get $var4
              local.set $var6
              br $label6
            end $label5
            local.get $var6
            i32.const 5
            i32.add
            local.set $var6
            local.get $var2
            i32.const 127
            i32.and
            local.set $var2
            i32.const 7
            local.set $var3
            block $label7
              loop $label8
                local.get $var4
                i32.load8_s
                local.tee $var9
                i32.const 127
                i32.and
                local.get $var3
                i32.shl
                local.get $var2
                i32.or
                local.set $var2
                local.get $var9
                i32.const -1
                i32.gt_s
                br_if $label7
                local.get $var4
                i32.const 1
                i32.add
                local.set $var4
                local.get $var3
                i32.const 7
                i32.add
                local.tee $var3
                i32.const 35
                i32.ne
                br_if $label8
                br $label6
              end $label8
            end $label7
            local.get $var4
            i32.const 1
            i32.add
            local.set $var6
          end $label6
          local.get $var0
          local.get $var8
          i32.const 2
          i32.shl
          i32.add
          local.get $var2
          i32.const 30
          i32.shl
          i32.const 31
          i32.shr_s
          local.get $var2
          i32.const 2
          i32.shr_u
          i32.xor
          local.get $var5
          i32.const 8
          i32.add
          local.get $var2
          i32.const 1
          i32.and
          i32.const 2
          i32.shl
          i32.or
          local.tee $var4
          i32.load
          i32.add
          local.tee $var3
          i32.store
          local.get $var4
          local.get $var3
          i32.store
          local.get $var8
          i32.const 1
          i32.add
          local.tee $var8
          local.get $var1
          i32.ne
          br_if $label9
          br $label2
        end $label9
      end $label3
      i32.const 0
      local.set $var8
      loop $label15
        block $label10
          local.get $var6
          local.get $var7
          i32.lt_u
          br_if $label10
          i32.const -2
          return
        end $label10
        local.get $var6
        i32.const 1
        i32.add
        local.set $var4
        local.get $var6
        i32.load8_s
        local.tee $var3
        i32.const 255
        i32.and
        local.set $var2
        block $label12
          block $label11
            local.get $var3
            i32.const -1
            i32.le_s
            br_if $label11
            local.get $var4
            local.set $var6
            br $label12
          end $label11
          local.get $var6
          i32.const 5
          i32.add
          local.set $var6
          local.get $var2
          i32.const 127
          i32.and
          local.set $var2
          i32.const 7
          local.set $var3
          block $label13
            loop $label14
              local.get $var4
              i32.load8_s
              local.tee $var9
              i32.const 127
              i32.and
              local.get $var3
              i32.shl
              local.get $var2
              i32.or
              local.set $var2
              local.get $var9
              i32.const -1
              i32.gt_s
              br_if $label13
              local.get $var4
              i32.const 1
              i32.add
              local.set $var4
              local.get $var3
              i32.const 7
              i32.add
              local.tee $var3
              i32.const 35
              i32.ne
              br_if $label14
              br $label12
            end $label14
          end $label13
          local.get $var4
          i32.const 1
          i32.add
          local.set $var6
        end $label12
        local.get $var0
        local.get $var8
        i32.const 1
        i32.shl
        i32.add
        local.get $var2
        i32.const 30
        i32.shl
        i32.const 31
        i32.shr_s
        local.get $var2
        i32.const 2
        i32.shr_u
        i32.xor
        local.get $var5
        i32.const 8
        i32.add
        local.get $var2
        i32.const 1
        i32.and
        i32.const 2
        i32.shl
        i32.or
        local.tee $var4
        i32.load
        i32.add
        local.tee $var3
        i32.store16
        local.get $var4
        local.get $var3
        i32.store
        local.get $var8
        i32.const 1
        i32.add
        local.tee $var8
        local.get $var1
        i32.ne
        br_if $label15
      end $label15
    end $label2
    i32.const 0
    i32.const -3
    local.get $var6
    local.get $var7
    i32.eq
    select
  )
  (func $meshopt_decodeFilterOct (;6;) (export "meshopt_decodeFilterOct") (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 v128)
    (local $var4 v128)
    (local $var5 v128)
    (local $var6 v128)
    (local $var7 v128)
    (local $var8 v128)
    (local $var9 i32)
    (local $var10 v128)
    local.get $var1
    i32.const -4
    i32.and
    local.set $var1
    block $label1
      block $label0
        local.get $var2
        i32.const 4
        i32.ne
        br_if $label0
        local.get $var1
        i32.eqz
        br_if $label1
        i32.const 0
        local.set $var2
        loop $label2
          local.get $var0
          local.get $var0
          v128.load align=1
          local.tee $var3
          i32.const 24
          i32x4.shl
          i32.const 24
          i32x4.shr_s
          f32x4.convert_i32x4_s
          local.tee $var4
          local.get $var3
          i32.const 8
          i32x4.shl
          i32.const 24
          i32x4.shr_s
          f32x4.convert_i32x4_s
          local.get $var4
          f32x4.abs
          local.get $var3
          i32.const 16
          i32x4.shl
          i32.const 24
          i32x4.shr_s
          f32x4.convert_i32x4_s
          local.tee $var5
          f32x4.abs
          f32x4.add
          f32x4.sub
          local.tee $var6
          v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
          i32x4.min_s
          local.tee $var7
          local.get $var4
          v128.const i32x4 0x80000000 0x80000000 0x80000000 0x80000000
          local.tee $var8
          v128.and
          v128.xor
          f32x4.add
          local.tee $var4
          v128.const i32x4 0x42FE0000 0x42FE0000 0x42FE0000 0x42FE0000
          local.get $var4
          local.get $var4
          f32x4.mul
          local.get $var6
          local.get $var6
          f32x4.mul
          local.get $var5
          local.get $var7
          local.get $var5
          local.get $var8
          v128.and
          v128.xor
          f32x4.add
          local.tee $var4
          local.get $var4
          f32x4.mul
          f32x4.add
          f32x4.add
          f32x4.sqrt
          f32x4.div
          local.tee $var5
          f32x4.mul
          v128.const i32x4 0x4B400000 0x4B400000 0x4B400000 0x4B400000
          local.tee $var7
          f32x4.add
          v128.const i32x4 0x000000FF 0x000000FF 0x000000FF 0x000000FF
          v128.and
          local.get $var3
          v128.const i32x4 0xFF000000 0xFF000000 0xFF000000 0xFF000000
          v128.and
          v128.or
          local.get $var4
          local.get $var5
          f32x4.mul
          local.get $var7
          f32x4.add
          i32.const 8
          i32x4.shl
          v128.const i32x4 0x0000FF00 0x0000FF00 0x0000FF00 0x0000FF00
          v128.and
          v128.or
          local.get $var6
          local.get $var5
          f32x4.mul
          local.get $var7
          f32x4.add
          i32.const 16
          i32x4.shl
          v128.const i32x4 0x00FF0000 0x00FF0000 0x00FF0000 0x00FF0000
          v128.and
          v128.or
          v128.store align=1
          local.get $var0
          i32.const 16
          i32.add
          local.set $var0
          local.get $var2
          i32.const 4
          i32.add
          local.tee $var2
          local.get $var1
          i32.lt_u
          br_if $label2
          br $label1
        end $label2
      end $label0
      local.get $var1
      i32.eqz
      br_if $label1
      i32.const 0
      local.set $var2
      loop $label3
        local.get $var0
        i32.const 16
        i32.add
        local.tee $var9
        local.get $var9
        v128.load align=1
        local.tee $var3
        v128.const i32x4 0x00000000 0xFFFF0000 0x00000000 0xFFFF0000
        local.tee $var8
        v128.and
        local.get $var0
        v128.load align=1
        local.tee $var6
        local.get $var3
        i8x16.shuffle 0 1 2 3 8 9 10 11 16 17 18 19 24 25 26 27
        local.tee $var5
        i32.const 16
        i32x4.shl
        i32.const 16
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.tee $var4
        local.get $var6
        local.get $var3
        i8x16.shuffle 4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31
        v128.const i32x4 0x00007FFF 0x00007FFF 0x00007FFF 0x00007FFF
        v128.and
        f32x4.convert_i32x4_s
        local.get $var5
        i32.const 16
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.tee $var5
        f32x4.abs
        local.get $var4
        f32x4.abs
        f32x4.add
        f32x4.sub
        local.tee $var3
        v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
        i32x4.min_s
        local.tee $var7
        local.get $var4
        v128.const i32x4 0x80000000 0x80000000 0x80000000 0x80000000
        local.tee $var10
        v128.and
        v128.xor
        f32x4.add
        local.tee $var4
        v128.const i32x4 0x46FFFE00 0x46FFFE00 0x46FFFE00 0x46FFFE00
        local.get $var4
        local.get $var4
        f32x4.mul
        local.get $var3
        local.get $var3
        f32x4.mul
        local.get $var5
        local.get $var7
        local.get $var5
        local.get $var10
        v128.and
        v128.xor
        f32x4.add
        local.tee $var4
        local.get $var4
        f32x4.mul
        f32x4.add
        f32x4.add
        f32x4.sqrt
        f32x4.div
        local.tee $var5
        f32x4.mul
        v128.const i32x4 0x4B400000 0x4B400000 0x4B400000 0x4B400000
        local.tee $var7
        f32x4.add
        v128.const i32x4 0x0000FFFF 0x0000FFFF 0x0000FFFF 0x0000FFFF
        v128.and
        local.get $var3
        local.get $var5
        f32x4.mul
        local.get $var7
        f32x4.add
        i32.const 16
        i32x4.shl
        v128.or
        local.tee $var3
        local.get $var4
        local.get $var5
        f32x4.mul
        local.get $var7
        f32x4.add
        v128.const i32x4 0x0000FFFF 0x0000FFFF 0x0000FFFF 0x0000FFFF
        v128.and
        local.tee $var4
        i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
        v128.or
        v128.store align=1
        local.get $var0
        local.get $var6
        local.get $var8
        v128.and
        local.get $var3
        local.get $var4
        i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
        v128.or
        v128.store align=1
        local.get $var0
        i32.const 32
        i32.add
        local.set $var0
        local.get $var2
        i32.const 4
        i32.add
        local.tee $var2
        local.get $var1
        i32.lt_u
        br_if $label3
      end $label3
    end $label1
  )
  (func $meshopt_decodeFilterQuat (;7;) (export "meshopt_decodeFilterQuat") (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 i32)
    (local $var4 v128)
    (local $var5 i32)
    (local $var6 v128)
    (local $var7 v128)
    (local $var8 v128)
    (local $var9 v128)
    (local $var10 v128)
    (local $var11 v128)
    block $label0
      local.get $var1
      i32.const -4
      i32.and
      local.tee $var3
      i32.eqz
      br_if $label0
      i32.const 0
      local.set $var1
      loop $label1
        local.get $var0
        i32.const 24
        i32.add
        v128.const i32x4 0x46B50389 0x46B50389 0x46B50389 0x46B50389
        local.get $var0
        v128.load align=1
        local.tee $var4
        local.get $var0
        i32.const 16
        i32.add
        local.tee $var5
        v128.load align=1
        local.tee $var6
        i8x16.shuffle 4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31
        local.tee $var7
        i32.const 16
        i32x4.shr_s
        local.tee $var8
        v128.const i32x4 0x00000003 0x00000003 0x00000003 0x00000003
        v128.or
        f32x4.convert_i32x4_s
        local.tee $var9
        f32x4.div
        local.tee $var10
        local.get $var9
        local.get $var9
        f32x4.mul
        local.tee $var9
        local.get $var9
        f32x4.add
        local.get $var4
        local.get $var6
        i8x16.shuffle 0 1 2 3 8 9 10 11 16 17 18 19 24 25 26 27
        local.tee $var9
        i32.const 16
        i32x4.shl
        i32.const 16
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.tee $var4
        local.get $var4
        f32x4.mul
        local.get $var9
        i32.const 16
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.tee $var6
        local.get $var6
        f32x4.mul
        local.get $var7
        i32.const 16
        i32x4.shl
        i32.const 16
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.tee $var7
        local.get $var7
        f32x4.mul
        f32x4.add
        f32x4.add
        f32x4.sub
        v128.const i32x4 0x00000000 0x00000000 0x00000000 0x00000000
        i32x4.max_s
        f32x4.sqrt
        f32x4.mul
        v128.const i32x4 0x4B400000 0x4B400000 0x4B400000 0x4B400000
        local.tee $var9
        f32x4.add
        v128.const i32x4 0x0000FFFF 0x0000FFFF 0x0000FFFF 0x0000FFFF
        local.tee $var11
        v128.and
        local.get $var10
        local.get $var6
        f32x4.mul
        local.get $var9
        f32x4.add
        i32.const 16
        i32x4.shl
        v128.or
        local.tee $var6
        local.get $var10
        local.get $var4
        f32x4.mul
        local.get $var9
        f32x4.add
        local.get $var11
        v128.and
        local.get $var10
        local.get $var7
        f32x4.mul
        local.get $var9
        f32x4.add
        i32.const 16
        i32x4.shl
        v128.or
        local.tee $var9
        i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
        local.tee $var4
        i64x2.extract_lane 1
        local.get $var8
        i32.const 4
        i32x4.shl
        local.tee $var10
        i32x4.extract_lane 3
        i64.extend_i32_u
        i64.rotl
        i64.store
        local.get $var5
        local.get $var4
        i64x2.extract_lane 0
        local.get $var10
        i32x4.extract_lane 2
        i64.extend_i32_u
        i64.rotl
        i64.store
        local.get $var0
        i32.const 8
        i32.add
        local.get $var6
        local.get $var9
        i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
        local.tee $var9
        i64x2.extract_lane 1
        local.get $var10
        i32x4.extract_lane 1
        i64.extend_i32_u
        i64.rotl
        i64.store
        local.get $var0
        local.get $var9
        i64x2.extract_lane 0
        local.get $var10
        i32x4.extract_lane 0
        i64.extend_i32_u
        i64.rotl
        i64.store
        local.get $var0
        i32.const 32
        i32.add
        local.set $var0
        local.get $var1
        i32.const 4
        i32.add
        local.tee $var1
        local.get $var3
        i32.lt_u
        br_if $label1
      end $label1
    end $label0
  )
  (func $meshopt_decodeFilterExp (;8;) (export "meshopt_decodeFilterExp") (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 v128)
    block $label0
      local.get $var2
      i32.const 2
      i32.shr_u
      local.get $var1
      i32.mul
      i32.const -4
      i32.and
      local.tee $var1
      i32.eqz
      br_if $label0
      i32.const 0
      local.set $var2
      loop $label1
        local.get $var0
        local.get $var0
        v128.load align=1
        local.tee $var3
        i32.const 8
        i32x4.shl
        i32.const 8
        i32x4.shr_s
        f32x4.convert_i32x4_s
        local.get $var3
        i32.const 1
        i32x4.shr_s
        v128.const i32x4 0xFF800000 0xFF800000 0xFF800000 0xFF800000
        v128.and
        v128.const i32x4 0x3F800000 0x3F800000 0x3F800000 0x3F800000
        i32x4.add
        f32x4.mul
        v128.store align=1
        local.get $var0
        i32.const 16
        i32.add
        local.set $var0
        local.get $var2
        i32.const 4
        i32.add
        local.tee $var2
        local.get $var1
        i32.lt_u
        br_if $label1
      end $label1
    end $label0
  )
  (func $meshopt_decodeFilterColor (;9;) (export "meshopt_decodeFilterColor") (param $var0 i32) (param $var1 i32) (param $var2 i32)
    (local $var3 v128)
    (local $var4 v128)
    (local $var5 v128)
    (local $var6 v128)
    (local $var7 v128)
    (local $var8 v128)
    (local $var9 v128)
    (local $var10 v128)
    (local $var11 i32)
    local.get $var1
    i32.const -4
    i32.and
    local.set $var1
    block $label1
      block $label0
        local.get $var2
        i32.const 4
        i32.ne
        br_if $label0
        local.get $var1
        i32.eqz
        br_if $label1
        i32.const 0
        local.set $var2
        loop $label2
          local.get $var0
          v128.const i32x4 0x437F0000 0x437F0000 0x437F0000 0x437F0000
          local.get $var0
          v128.load align=1
          local.tee $var3
          i32.const 24
          i32x4.shr_u
          local.tee $var4
          local.get $var3
          i32.const 25
          i32x4.shr_u
          v128.or
          local.tee $var5
          i32.const 2
          i32x4.shr_u
          local.get $var5
          v128.or
          local.tee $var5
          i32.const 4
          i32x4.shr_u
          local.get $var5
          v128.or
          local.tee $var6
          f32x4.convert_i32x4_s
          f32x4.div
          local.tee $var5
          local.get $var3
          i32.const 8
          i32x4.shl
          i32.const 24
          i32x4.shr_s
          local.tee $var7
          local.get $var3
          v128.const i32x4 0x000000FF 0x000000FF 0x000000FF 0x000000FF
          local.tee $var8
          v128.and
          local.tee $var9
          i32x4.add
          f32x4.convert_i32x4_s
          f32x4.mul
          v128.const i32x4 0x4B400000 0x4B400000 0x4B400000 0x4B400000
          local.tee $var10
          f32x4.add
          i32.const 8
          i32x4.shl
          v128.const i32x4 0x0000FF00 0x0000FF00 0x0000FF00 0x0000FF00
          v128.and
          local.get $var5
          local.get $var9
          local.get $var7
          i32x4.sub
          local.get $var3
          i32.const 16
          i32x4.shl
          i32.const 24
          i32x4.shr_s
          local.tee $var3
          i32x4.add
          f32x4.convert_i32x4_s
          f32x4.mul
          local.get $var10
          f32x4.add
          local.get $var8
          v128.and
          v128.or
          local.get $var5
          local.get $var9
          local.get $var7
          local.get $var3
          i32x4.add
          i32x4.sub
          f32x4.convert_i32x4_s
          f32x4.mul
          local.get $var10
          f32x4.add
          i32.const 16
          i32x4.shl
          v128.const i32x4 0x00FF0000 0x00FF0000 0x00FF0000 0x00FF0000
          v128.and
          v128.or
          local.get $var5
          local.get $var6
          local.get $var4
          i32.const 1
          i32x4.shl
          v128.and
          local.get $var4
          v128.const i32x4 0x00000001 0x00000001 0x00000001 0x00000001
          v128.and
          v128.or
          f32x4.convert_i32x4_s
          f32x4.mul
          local.get $var10
          f32x4.add
          i32.const 24
          i32x4.shl
          v128.or
          v128.store align=1
          local.get $var0
          i32.const 16
          i32.add
          local.set $var0
          local.get $var2
          i32.const 4
          i32.add
          local.tee $var2
          local.get $var1
          i32.lt_u
          br_if $label2
          br $label1
        end $label2
      end $label0
      local.get $var1
      i32.eqz
      br_if $label1
      i32.const 0
      local.set $var2
      loop $label3
        local.get $var0
        i32.const 16
        i32.add
        local.tee $var11
        v128.const i32x4 0x477FFF00 0x477FFF00 0x477FFF00 0x477FFF00
        local.get $var0
        v128.load align=1
        local.tee $var4
        local.get $var11
        v128.load align=1
        local.tee $var7
        i8x16.shuffle 4 5 6 7 12 13 14 15 20 21 22 23 28 29 30 31
        local.tee $var5
        i32.const 16
        i32x4.shr_u
        local.tee $var10
        local.get $var5
        i32.const 17
        i32x4.shr_u
        v128.or
        local.tee $var3
        i32.const 2
        i32x4.shr_u
        local.get $var3
        v128.or
        local.tee $var3
        i32.const 4
        i32x4.shr_u
        local.get $var3
        v128.or
        local.tee $var3
        i32.const 8
        i32x4.shr_u
        local.get $var3
        v128.or
        local.tee $var6
        f32x4.convert_i32x4_s
        f32x4.div
        local.tee $var3
        local.get $var4
        local.get $var7
        i8x16.shuffle 0 1 2 3 8 9 10 11 16 17 18 19 24 25 26 27
        local.tee $var9
        v128.const i32x4 0x0000FFFF 0x0000FFFF 0x0000FFFF 0x0000FFFF
        local.tee $var4
        v128.and
        local.tee $var7
        local.get $var9
        i32.const 16
        i32x4.shr_s
        local.tee $var8
        i32x4.add
        local.get $var5
        i32.const 16
        i32x4.shl
        i32.const 16
        i32x4.shr_s
        local.tee $var9
        i32x4.sub
        f32x4.convert_i32x4_s
        f32x4.mul
        v128.const i32x4 0x4B400000 0x4B400000 0x4B400000 0x4B400000
        local.tee $var5
        f32x4.add
        local.get $var4
        v128.and
        local.get $var3
        local.get $var7
        local.get $var8
        local.get $var9
        i32x4.add
        i32x4.sub
        f32x4.convert_i32x4_s
        f32x4.mul
        local.get $var5
        f32x4.add
        i32.const 16
        i32x4.shl
        v128.or
        local.tee $var8
        local.get $var3
        local.get $var6
        local.get $var10
        i32.const 1
        i32x4.shl
        v128.and
        local.get $var10
        v128.const i32x4 0x00000001 0x00000001 0x00000001 0x00000001
        v128.and
        v128.or
        f32x4.convert_i32x4_s
        f32x4.mul
        local.get $var5
        f32x4.add
        i32.const 16
        i32x4.shl
        local.get $var3
        local.get $var9
        local.get $var7
        i32x4.add
        f32x4.convert_i32x4_s
        f32x4.mul
        local.get $var5
        f32x4.add
        local.get $var4
        v128.and
        v128.or
        local.tee $var3
        i8x16.shuffle 8 9 24 25 10 11 26 27 12 13 28 29 14 15 30 31
        v128.store align=1
        local.get $var0
        local.get $var8
        local.get $var3
        i8x16.shuffle 0 1 16 17 2 3 18 19 4 5 20 21 6 7 22 23
        v128.store align=1
        local.get $var0
        i32.const 32
        i32.add
        local.set $var0
        local.get $var2
        i32.const 4
        i32.add
        local.tee $var2
        local.get $var1
        i32.lt_u
        br_if $label3
      end $label3
    end $label1
  )
  (func $sbrk (;10;) (export "sbrk") (param $var0 i32) (result i32)
    (local $var1 i32)
    (local $var2 i32)
    (local $var3 i32)
    i32.const 0
    i32.const 0
    i32.load offset=36864
    local.tee $var1
    local.get $var0
    i32.const 3
    i32.add
    i32.const -4
    i32.and
    i32.add
    local.tee $var0
    i32.store offset=36864
    block $label1
      block $label0
        local.get $var0
        memory.size
        i32.const 16
        i32.shl
        local.tee $var2
        i32.le_u
        br_if $label0
        i32.const -1
        local.set $var3
        local.get $var0
        local.get $var2
        i32.sub
        i32.const 65535
        i32.add
        i32.const 16
        i32.shr_u
        memory.grow
        i32.const -1
        i32.eq
        br_if $label1
      end $label0
      local.get $var1
      local.set $var3
    end $label1
    local.get $var3
  )
  (data (i32.const 36864) "\10\99\00\00")
)